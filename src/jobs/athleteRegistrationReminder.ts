import { ExtraBookingInfoEvent } from "@/app/notifications/events/ExtraBookingInfoEvent";
import { bookingRepository } from "@/app/repositories/bookingRepository";
import { Booking } from "@/app/types/camp";
import { checkNotification } from "./rules/checkNotification";

export const athleteRegistrationReminderHandler = async () => {
  const bookings = await bookingRepository.findAll() as unknown as Booking[];

  for (const booking of bookings) {
    const needsRegistration = !Array.isArray(booking.athlete_registrations) || booking.athlete_registrations.length === 0;
    console.log("needsRegistration ??", needsRegistration);
    if (!needsRegistration) continue;

    const alreadyNotified = await checkNotification(booking.id);
    console.log("needsNotification ??", alreadyNotified);
    if (alreadyNotified) continue;

    try {
      const extraBookingInfoEvent = new ExtraBookingInfoEvent();
      await extraBookingInfoEvent.notify(booking);
      console.log(`Registration email sent to ${booking.email}`);
    } catch (err) {
      console.error("Error sending registration email", err);
    }
  }
};

export const fetchAthleteRegistrationConfig = {
  name: "fetch-athlete-registration",
  cron: "0 0 */2 * *"
};