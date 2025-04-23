import { sendConfirmationEmail } from "@/app/lib/email/sendConfirmationEmail";
import { prisma } from "@/app/lib/prisma";
import { updateBookingStatus } from "@/app/services/bookingService";
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

    try {
      await sendConfirmationEmail({
              email: booking?.email ?? "hatim.jini@gmail.com",
              name: booking?.athleteName ?? "Unknown Athlete",
              camp: booking?.session?.label ?? "Unknown Camp",
              startDate: booking?.session?.startDate ?? "Unknown Start Date",
              endDate: booking?.session?.endDate ?? "Unknown End Date",
              amount: booking?.amount ?? 0,
              period: booking?.session?.period ?? "Unknown Period",
              slotsLeft: booking?.session?.availableSlots ?? 0,
            });
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Failed to send confirmation email:", error);
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
