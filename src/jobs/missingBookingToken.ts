import { bookingRepository } from "@/app/repositories/bookingRepository";
import { generateBookingToken } from "@/app/utils/token";


export const missingTokenBookingHandler = async () => {
  const bookings = await bookingRepository.findAll();
  try {
    for (const booking of bookings) {
      if (booking.token == null) {
        try {
          const token = generateBookingToken(booking.id);
          bookingRepository.update(booking.id, { token: token });
          console.log(`missing booking tokens ${booking.id}`);
        } catch (err) {
          console.error("token not generated");
        }
      }
    }
  } catch (err) {
    console.error("error sending emails", err);
  }
};

export const fetchMissingTokenBookingsConfig = {
  name: "fetch-missing-token-bookings",
  cron: "0 0 * * *",
};
