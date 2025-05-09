import { NextRequest, NextResponse } from "next/server";
import { createStripeCheckoutSession } from "@/app/lib/stripe/createCheckoutSession";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const origin = request.headers.get("origin") || "";
    const session = await createStripeCheckoutSession(formData, origin);

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error("Stripe Checkout error:", error);
    return NextResponse.json({ error: "Failed to create session" }, { status: 500 });
  }
}