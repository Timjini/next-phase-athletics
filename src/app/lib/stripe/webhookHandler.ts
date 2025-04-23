import { stripe } from "./client";
import { NextApiRequest } from "next";

export async function handleStripeWebhook(req: NextApiRequest) {
  // parse and validate the event
  // process session or payment_intent
}