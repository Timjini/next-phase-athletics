import { prisma } from '@/app/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;

  try {
    const campProgram = await prisma.campProgram.findUnique({
      where: { slug },
    });

    if (!campProgram) {
      return NextResponse.json({ message: 'Camp program not found' }, { status: 404 });
    }

    return NextResponse.json(campProgram);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
