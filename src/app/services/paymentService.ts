import { stripe } from "@/app/lib/stripe/client";
import { PaymentConfirmationError } from "@/app/utils/errors";
import { logger } from "@/app/utils/logger";

export const confirmStripePayment = async (sessionId: string) => {
  try {
    if (!sessionId || typeof sessionId !== "string") {
      throw new PaymentConfirmationError("Invalid or missing session ID");
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      throw new PaymentConfirmationError("Payment not completed");
    }

    logger.info("Payment confirmed", { sessionId });

    return {
      status: "succeeded",
      message: "Payment confirmed successfully",
      session,
    };
  } catch (error) {
    logger.error("Payment confirmation failed", { error, sessionId });
    throw error;
  }
};