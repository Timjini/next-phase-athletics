// import { stripe } from "./client";
// import { buffer } from "micro";
// import { NextApiRequest, NextApiResponse } from "next";
// import { sendConfirmationEmail } from "@/app/lib/email/sendConfirmationEmail";
// import { updateBookingStatus } from "@/app/services/bookingService";
// import { logger } from "@/app/utils/logger";

// const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handleStripeWebhook(req: NextApiRequest, res: NextApiResponse) {
//   const sig = req.headers["stripe-signature"];

//   let event;

//   try {
//     const buf = await buffer(req);
//     event = stripe.webhooks.constructEvent(buf, sig!, endpointSecret);
//   } catch (err) {
//     logger.error("Webhook signature verification failed", { error: err });
//     const errorMessage = err instanceof Error ? err.message : "Unknown error";
//     return res.status(400).send(`Webhook Error: ${errorMessage}`);
//   }

//   if (event.type === "checkout.session.completed") {
//     const session = event.data.object;

//     // 1. Update booking status in DB
//     await updateBookingStatus(session.id, "CONFIRMED", "PAID");


//     // 2. Send confirmation email
//     await sendConfirmationEmail({
//       email: session.customer_email ?? "no-reply@example.com",
//       name: session.metadata?.athleteName ?? "Unknown Athlete",
//       camp: session.metadata?.camp ?? "Unknown Camp",
//     });

//     logger.info("Processed session.completed event", { sessionId: session.id });
//   }

//   // optionally handle other events like payment failures here

//   res.json({ received: true });
// }
