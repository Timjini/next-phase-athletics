import { stripe } from "./client";

export const createStripeCheckoutSession = async (formData: any, origin: string) => {
  const campPriceInCents = Math.round(formData.price * 100);

  const stripeFee = Math.ceil((campPriceInCents + 30) / (1 - 0.029) - campPriceInCents);

  const campLineItems = formData.campDetails.map((camp: { name: string; price: number }) => ({
    price_data: {
      currency: "usd",
      product_data: { name: `Camp Registration - ${camp.name}` },
      unit_amount: Math.round(camp.price * 100),
    },
    quantity: 1,
  }));

  return await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      ...campLineItems,
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
      camp: formData.camp.join(", "),
      athleteName: formData.athleteName,
      email: formData.email,
      phone: formData.phone,
    },
  });
};


