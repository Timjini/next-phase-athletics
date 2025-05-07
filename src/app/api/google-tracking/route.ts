import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { transactionId, value } = body;

  const measurementId = process.env.GA4_MEASUREMENT_ID;
  const apiSecret = process.env.GA4_API_SECRET;

  const payload = {
    client_id: crypto.randomUUID(),
    events: [
      {
        name: 'purchase',
        params: {
          transaction_id: transactionId,
          value,
          currency: 'USD',
          debug_mode: true,
          items: [
            {
              item_id: 'camp_001',
              item_name: 'Elite Basketball Camp',
              quantity: 1,
              price: value,
            },
          ],
        },
      },
    ],
  };

  const url = `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    console.error('Failed to send GA4 event:', await res.text());
    return NextResponse.json({ error: 'Failed to send GA4 event' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
