import { bookingRepository } from "@/app/repositories/bookingRepository"
import { BookingStatus } from "@/app/types/camp";

const pendingStatus: BookingStatus = BookingStatus.PENDING; 

export const fetchPendingBookingsHandler = async () =>  {
    const bookings = await bookingRepository.findPendingPaymentBooking(pendingStatus);
    console.log("all bookings ", bookings);
}

export const fetchPendingBookingsConfig = {
    name: 'fetch-pending-bookings',
    cron: '* * * * *',
  };