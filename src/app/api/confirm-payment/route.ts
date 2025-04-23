import { sendAdminNotificationEmail } from "@/app/lib/email/sendAdminEmail";
import { sendConfirmationEmail } from "@/app/lib/email/sendConfirmationEmail";
import { prisma } from "@/app/lib/prisma";
import { updateBookingStatus } from "@/app/services/bookingService";
import { formatDate, sessionPeriod } from "@/app/utils/dateUtils";
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
      await updateBookingStatus(body.sessionId, "CONFIRMED", "PAID");
      console.log("Booking status updated successfully");

      booking = await getBookingBySessionId(body.sessionId);

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
    } catch (error) {
      console.error("Failed to update booking status:", error);
      // Proceed with payment confirmation even if booking update fails
    }

    // const campPriceInCents = booking?.amount;
    // const stripeFee = Math.ceil(
    //   (campPriceInCents + 30) / (1 - 0.029) - campPriceInCents
    // );
    // const totalAmount = campPriceInCents + stripeFee;

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
        session: true,
      },
    });

    if (!booking) {
      console.error(`Booking not found for stripeId: ${stripeId}`);
    }

    return booking;
  } catch (error) {
    console.error("Error fetching booking by stripeId:", error);
  }
}
