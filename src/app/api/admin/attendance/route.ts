import { handleAdminRoute } from '@/app/lib/handlers/adminHandler';
import { bookingRepository } from '@/app/repositories/bookingRepository';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  return handleAdminRoute(async (user) => {
    try {
      const body = await request.json();
      const { scanData } = body;
      if (!scanData) {
        return NextResponse.json({ message: 'No scan data provided' }, { status: 400 });
      }

      const booking = await bookingRepository.updateByQrCode(scanData);
      if (!booking || booking.count === 0) {
        return NextResponse.json({ message: 'No booking found' }, { status: 404 });
      }

      return NextResponse.json(booking);
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
  });
};
