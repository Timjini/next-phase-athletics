import { stripe } from "./client";

export const createStripeCheckoutSession = async (formData: any, origin: string) => {
  const campPriceInCents = formData.price * 100;
  const stripeFee = Math.ceil((campPriceInCents + 30) / (1 - 0.029) - campPriceInCents);

  return await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: { name: `Camp Registration - ${formData.camp}` },
          unit_amount: campPriceInCents,
        },
        quantity: 1,
      },
      {
        price_data: {
          currency: "usd",
          product_data: { name: "Processing Fee" },
          unit_amount: stripeFee,
        },
        quantity: 1,
      },
    ],
    success_url: `${origin}/camps/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/camps/cancel`,
    metadata: {
      camp: formData.camp,
      athleteName: formData.athleteName,
      email: formData.email,
      phone: formData.phone,
    },
  });
};
