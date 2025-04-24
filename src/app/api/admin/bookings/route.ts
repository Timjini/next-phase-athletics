import { handleAdminRoute } from '@/app/lib/handlers/adminHandler';
import { bookingRepository } from '@/app/repositories/bookingRepository';
import { NextResponse } from 'next/server';

export const GET = async () => {
  return handleAdminRoute(async (user) => {
    try {
      const bookings = await bookingRepository.findAll();
      if (bookings.length === 0 || bookings == null) {
        return NextResponse.json({ message: 'No booking found' }, { status: 404 });
      }
  
      return NextResponse.json(bookings);
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
  });
};
