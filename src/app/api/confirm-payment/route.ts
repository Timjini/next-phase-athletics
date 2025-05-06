// This route needs a lot of refactoring
// to make it more readable and maintainable
import { sendAdminNotificationEmail } from "@/app/lib/email/sendAdminEmail";
import { sendConfirmationEmail } from "@/app/lib/email/sendConfirmationEmail";
import { prisma } from "@/app/lib/prisma";
import { generateAndUploadQRCode } from "@/app/lib/qrCode";
import { updateBookingStatus } from "@/app/services/bookingService";
import { formatDate, sessionPeriod } from "@/app/utils/dateUtils";
import { generateBookingToken } from "@/app/utils/token";
import { NextRequest, NextResponse } from "next/server";

type RequestBody = {
  sessionId: string;
};

export async function POST(request: NextRequest) {
  try {
    const body: RequestBody = await request.json();

    // Validate sessionId
    if (!body.sessionId || typeof body.sessionId !== "string") {
      return NextResponse.json(
        { error: "Invalid session ID" },
        { status: 400 }
      );
    }

    let booking;
    try {

      booking = await getBookingBySessionId(body.sessionId);

      if (booking.status === "CONFIRMED" && booking.paymentStatus === "PAID") {
        console.log("Booking is already confirmed");
        return NextResponse.json(
          { error: "Booking is already confirmed" },
          { status: 201 }
        );
      }
      await updateBookingStatus(body.sessionId, "CONFIRMED", "PAID");
      console.log("Booking status updated successfully");

      // Decrease availableSlots by 1
      if (booking?.sessionId) {
        await prisma.campSession.update({
          where: { id: booking.sessionId },
          data: {
            availableSlots: {
              decrement: 1,
            },
          },
        });
        console.log("Session slot decremented successfully");
      }

      if (booking) {
        const qrData = `booking:${booking.id}:${Date.now()}`;
        
        const { qrCodeData, qrCodeUrl } = await generateAndUploadQRCode(qrData);
        const token = generateBookingToken(booking.id);
        
        // Update booking with QR code info
        await prisma.booking.update({
          where: { id: booking.id },
          data: {
            qrCodeData,
            qrCodeUrl,
            token,
          }
        });
    
        console.log("QR code generated and stored successfully");
      }
    } catch (error) {
      console.error("Failed to update booking status:", error);
      // Proceed with payment confirmation even if booking update fails
    }

    // const campPriceInCents = booking?.amount;
    // const stripeFee = Math.ceil(
    //   (campPriceInCents + 30) / (1 - 0.029) - campPriceInCents
    // );
    // const totalAmount = campPriceInCents + stripeFee;

    booking = await getBookingBySessionId(body.sessionId);
    console.log("Booking details: fetched again", booking);
    try {
      await sendConfirmationEmail({
        id: booking?.id ?? "Unknown ID",
        email: booking?.email ?? "info@nxtphs.com",
        name: booking?.athleteName ?? "Unknown Athlete",
        camp: booking?.session?.label ?? "Unknown Camp",
        startDate: booking?.session?.startDateString ?? "Unknown Start Date",
        endDate: booking?.session?.endDateString ?? "Unknown End Date",
        // amount: totalAmount ?? 0,
        period: sessionPeriod(booking?.session?.period) ?? "Unknown Period",
        qrCodeUrl: booking?.qrCodeUrl ?? "Unknown QR Code URL",
        location: booking?.session?.campProgram?.location ?? "Unknown Location",
        
      });
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Failed to send confirmation email:", error);
    }

    try {
      await sendAdminNotificationEmail({
        
        email: booking?.email ?? "info@nxtphs.com",
        phone: booking?.phone ?? "Unknown Phone",
        name: booking?.athleteName ?? "Unknown Athlete",
        camp: booking?.session?.label ?? "Unknown Camp",
        startDate: booking?.session?.startDateString ?? "Unknown Start Date",
        endDate: booking?.session?.endDateString ?? "Unknown End Date",
        // amount: totalAmount ?? 0,
        period: sessionPeriod(booking?.session?.period) ?? "Unknown Period",
      });
      console.log("Admin notification sent successfully");
    } catch (error) {
      console.error("Failed to send admin notification email:", error);
    }

    // Google Analytics event tracking
    // try {
    //   window.gtag("event", "conversion", {
    //     transaction_id: body.sessionId ?? "Unknown ID",
    //     value: booking?.amount ?? 0,
    //     currency: 'USD',
    //     items: [
    //       {
    //         item_name: booking?.session?.label ?? "XLR8 Camp",
    //         item_id: booking?.sessionId ?? "Unknown Session ID",
    //         price: booking?.amount ?? 0,
    //         quantity: 1,
    //       },
    //     ],
    //     event_callback: function () {
    //       console.log("Conversion event sent successfully");
    //     }
    //   });
    // } catch (error) {
    //   console.error("Failed to send conversion event:", error);
    // }



    // Return success response
    return NextResponse.json({
      status: "succeeded",
      message: "Payment confirmed successfully",
    });
  } catch (error) {
    console.error("Payment confirmation failed:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
async function getBookingBySessionId(stripeId: string): Promise<any> {
  try {
    const booking = await prisma.booking.findUnique({
      where: { stripeId },
      include: {
        campSessions: {
          include: {
            campProgram: true,
          },
        },
        notifications: true,
        athlete_registrations: true,
      }
    });

    if (!booking) {
      console.error(`Booking not found for stripeId: ${stripeId}`);
    }

    return booking;
  } catch (error) {
    console.error("Error fetching booking by stripeId:", error);
  }
}
