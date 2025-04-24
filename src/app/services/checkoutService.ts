import { createStripeCheckoutSession } from "@/app/lib/stripe/createCheckoutSession";
import {
  createBooking,
  updateBookingStatus,
} from "@/app/services/bookingService";

export const initiateCheckoutWithBooking = async (
  formData: any,
  origin: string
) => {
  let session;

  try {
    // First, create the Stripe Checkout session
    session = await createStripeCheckoutSession(formData, origin);

    if (!session) {
      console.error("Failed to create Stripe Checkout Session");
    }
  } catch (error) {
    console.error("⚠️ Failed to create Stripe Checkout Session.", error);
  }

  try {
    await createBooking({
      session: {
        connect: { id: formData.campId },
      },
      amount: formData.price,
      campName: formData.camp,
      athleteName: formData.athleteName,
      email: formData.email,
      phone: formData.phone,
      rawData: JSON.stringify(formData),
      acceptedTerms: formData.acceptedTerms,
      status: "PENDING",
      paymentStatus: "UNPAID",
      stripeId: session?.id,
    });
  } catch (error) {
    console.error("⚠️ Failed to create booking after Stripe session.", error);
  }

  return session;
};
