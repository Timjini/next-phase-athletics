import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY!, {
  apiVersion: '2025-03-31.basil',
});

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Camp Registration - ${formData.camp}`,
            },
            unit_amount: 65000,
          },
          quantity: 1,
        },
      ],
      success_url: `${request.headers.get('origin')}/camps/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get('origin')}/camps/cancel`,
      metadata: {
        camp: formData.camp,
        athleteName: formData.athleteName,
        email: formData.email,
        phone: formData.phone
      },
    });

    return NextResponse.json({ sessionId: session.id });
    
  } catch (error: unknown) {
    console.error('Stripe Checkout error:', error);
    return NextResponse.json(
      { error: error },
      { status: 500 }
    );
  }
}