import { ExtraBookingInfoEvent } from "@/app/notifications/events/ExtraBookingInfoEvent";
import { bookingRepository } from "@/app/repositories/bookingRepository";
import { BookingStatus } from "@/app/types/camp";

const pendingStatus: BookingStatus = BookingStatus.PENDING;

export const pendingBookingsReminderHandler = async () => {
  const bookings = await bookingRepository.findPendingPaymentBooking(
    pendingStatus
  );
  try {
    bookings.forEach((booking) => {
      if (booking.paymentStatus == "UNPAID" && booking.status == "PENDING") {
        try {
          // const extraBookingInfoEvent = new ExtraBookingInfoEvent();
          // extraBookingInfoEvent.notify(booking);
          console.log(`email sent ${booking.email} `);
        } catch (err) {
          console.error("mail not sent");
        }
      }
    });
  } catch (err) {
    console.error("error sending emails", err);
  }
};

export const fetchPendingBookingsConfig = {
  name: "fetch-pending-bookings",
  cron: "* * * * *",
};
