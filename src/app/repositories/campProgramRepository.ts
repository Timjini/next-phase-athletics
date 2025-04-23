import { prisma } from '../lib/prisma';

export const campProgramRepository = {
  findById: async (id: string) => {
    return prisma.campProgram.findUnique({ where: { id } });
  },

  findBySlug: async (slug: string) => {
    return prisma.campProgram.findUnique({
      where: { slug },
      include: {
        sessions: true,
      },
    });
  },
  
  update: async (id: string, data: any) => {
    return prisma.campProgram.update({
      where: { id },
      data,
    });
  },

  findAll: async () => {
    return prisma.campProgram.findMany({
      include: {
        sessions: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });
  },

};