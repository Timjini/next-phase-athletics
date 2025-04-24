import { campProgramRepository } from '@/app/repositories/campProgramRepository';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const campPrograms = await campProgramRepository.findAll();
    if (campPrograms.length === 0 || campPrograms == null) {
      return NextResponse.json({ message: 'No camp programs found' }, { status: 404 });
    }

    return NextResponse.json(campPrograms);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
