// app/api/find-booking/route.ts
import { bookingRepository } from '@/app/repositories/bookingRepository';
import { decodeBookingToken } from '@/app/utils/token';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { token } = body;

    if (!token) {
      return NextResponse.json({ message: 'Missing token' }, { status: 400 });
    }

    const decoded = decodeBookingToken(token);

    if (!decoded || !decoded.bookingId) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 400 });
    }

    const booking = await bookingRepository.findById(decoded.bookingId);

    if (!booking) {
      return NextResponse.json({ message: 'Booking not found' }, { status: 404 });
    }

    return NextResponse.json(booking);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
