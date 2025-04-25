import { bookingRepository } from "@/app/repositories/bookingRepository";

export const createBooking = async (data: {
  session: {
    connect: { id: string };
  },
  sessionId?: string;
  stripeId?: string;
  amount: number;
  campName: string;
  athleteName: string;
  email: string;
  phone: string;
  rawData: string;
  acceptedTerms: boolean;
  status: string;
  paymentStatus: string;
  attended: string;
  qrCodeUsed: boolean;
  qrCodeData: string;
  qrCodeUrl: string;
}) => {
  return bookingRepository.create(data);
};

// update service
export const updateBookingStatus = async (
    stripeId: string,
    status: string,
    paymentStatus: string
  ) => {
    return bookingRepository.updateBySessionId(stripeId, { status, paymentStatus });
  };
