import { createStripeCheckoutSession } from "@/app/lib/stripe/createCheckoutSession";
import {
  createBooking,
} from "@/app/services/bookingService";
import { CheckoutFormData } from "../types/camp";

export const initiateCheckoutWithBooking = async (
  formData: CheckoutFormData,
  origin: string
) => {
  let session;

  try {
    session = await createStripeCheckoutSession(formData, origin);
    if (!session) {
      console.error("Failed to create Stripe Checkout Session");
    }
  } catch (error) {
    console.error("⚠️ Failed to create Stripe Checkout Session.", error);
  }

  try {
    await createBooking({
      campSessions: {
        connect: formData.campIds.map((id) => ({ id })),
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
      stripeId: session?.id ?? undefined,
      attended: "PENDING",
      qrCodeUsed: false,
      qrCodeData: "",
      qrCodeUrl: "",
      tShirtSize: formData.tShirtSize ?? null,
      subscribeToProgram: formData.subscribeToProgram ?? null,
      token: "",
    });
  } catch (error) {
    console.error("Failed to create booking after Stripe session.", error);
  }

  return session;
};

