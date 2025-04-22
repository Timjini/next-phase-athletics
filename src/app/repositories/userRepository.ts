import { prisma } from '../lib/prisma';

export const campProgramRepository = {
  findById: async (id: string) => {
    return prisma.user.findUnique({ where: { id } });
  }
}