import { handleAdminRoute } from '@/app/lib/handlers/adminHandler';
import { campProgramRepository } from '@/app/repositories/campProgramRepository';
import { NextResponse } from 'next/server';

export const GET = async () => {
  return handleAdminRoute(async (user) => {
    try {
      const camps = await campProgramRepository.findAll();
      if (camps.length === 0 || camps == null) {
        return NextResponse.json({ message: 'No camp found' }, { status: 404 });
      }
  
      return NextResponse.json(camps);
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
  });
};
