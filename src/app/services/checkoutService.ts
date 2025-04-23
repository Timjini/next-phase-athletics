import { createStripeCheckoutSession } from "@/app/lib/stripe/createCheckoutSession";
import { createBooking } from "@/app/services/bookingService";

export const initiateCheckoutWithBooking = async (formData: any, origin: string) => {
  const session = await createStripeCheckoutSession(formData, origin);

  await createBooking({
    sessionId: session.id,
    amount: formData.price,
    campName: formData.camp,
    athleteName: formData.athleteName,
    email: formData.email,
    rawData: JSON.stringify(formData),
    acceptedTerms: formData.acceptedTerms,
    status: "PENDING",
  });

  return session;
};
