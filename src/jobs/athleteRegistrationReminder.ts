import { ExtraBookingInfoEvent } from "@/app/notifications/events/ExtraBookingInfoEvent";
import { bookingRepository } from "@/app/repositories/bookingRepository";

export const athleteRegistrationReminderHandler = async () => {
  const bookings = await bookingRepository.findAll();

  bookings.forEach((booking) => {  
    if (!Array.isArray(booking.athlete_registrations) || booking.athlete_registrations.length === 0) {
        {
      try {
        const extraBookingInfoEvent = new ExtraBookingInfoEvent();
        extraBookingInfoEvent.notify(booking);
        console.log(`email sent ${booking.email} `);
      } catch (err) {
        console.error("error sending emails", err);
      }
    }
    }
  });
};

export const fetchAthleteRegistrationConfig = {
    name: "fetch-athlete-registration",
    cron: "0 0 * * *",
  };
