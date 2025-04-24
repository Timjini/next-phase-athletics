import { campProgramRepository } from '@/app/repositories/campProgramRepository';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const campPrograms = await campProgramRepository.findAll();
    console.log('Camp programs:', campPrograms);
    if (campPrograms.length === 0 || campPrograms == null) {
      return NextResponse.json({ message: 'No camp programs found' }, { status: 404 });
    }

    return NextResponse.json(campPrograms);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { slug } = body;

    if (!slug) {
      return NextResponse.json({ message: 'Missing slug' }, { status: 400 });
    }

    const campProgram = await campProgramRepository.findBySlug(slug);

    if (!campProgram) {
      return NextResponse.json({ message: 'Camp program not found' }, { status: 404 });
    }

    return NextResponse.json(campProgram);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

