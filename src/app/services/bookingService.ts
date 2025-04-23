import { bookingRepository } from "@/app/repositories/bookingRepository";

export const createBooking = async (data: {
  sessionId: string;
  amount: number;
  campName: string;
  athleteName: string;
  email: string;
  rawData: string;
  acceptedTerms: boolean;
}) => {
  return bookingRepository.create(data);
};

// update service
export const updateBookingStatus = async (
    id: string,
    status: string,
    paymentStatus: string
  ) => {
    return bookingRepository.update(id, { status, paymentStatus });
  };