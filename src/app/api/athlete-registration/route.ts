// app/api/athlete-registration/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import { athleteRegistrationSchema } from '@/app/types/athleteRegistrationForm';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("body------>",body)
    const validatedData = athleteRegistrationSchema.parse(body);
    const registration = await prisma.athleteRegistration.create({
      data: {
        ...validatedData,
        bookingId: body.bookingId,
      },
    });

    return NextResponse.json(registration, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: 'Invalid data', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 400 }
    );
  }
}