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
  
  findAll: async () => {
    return prisma.campProgram.findMany({
      include: {
        sessions: true,
      },
    });
  },

};