import { campProgramRepository } from '@/app/repositories/campProgramRepository';
import { NextResponse } from 'next/server';

export async function GET(request: Request, context: { params: { slug: string } }) {
  const { slug } = context.params;

  try {
    if (!slug) {
      return NextResponse.json({ message: 'Camp program not found' }, { status: 404 });
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
export async function POST(request: Request, context: { params: { slug: string } }) {
  const { slug } = context.params;

  try {
    if (!slug) {
      return NextResponse.json({ message: 'Camp program not found' }, { status: 404 });
    }

    const campProgram = await campProgramRepository.findBySlug(slug);

    if (!campProgram) {
      return NextResponse.json({ message: 'Camp program not found' }, { status: 404 });
    }

    const data = await request.json();

    if (!data) {
      return NextResponse.json({ message: 'Invalid data' }, { status: 400 });
    }

    const updatedCampProgram = await campProgramRepository.update(campProgram.id, data);

    return NextResponse.json(updatedCampProgram);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}