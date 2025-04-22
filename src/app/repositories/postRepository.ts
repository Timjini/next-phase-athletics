import { prisma } from '../lib/prisma';

export const postRepository = {
  findById: async (id: string) => {
    return prisma.post.findUnique({ where: { id } });
  },
  findAll: async () => {
    return prisma.post.findMany();
  },

};