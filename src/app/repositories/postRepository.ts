import { prisma } from '../lib/prisma';

export const postRepository = {
  findById: async (id: string) => {
    return prisma.post.findUnique({ where: { id } });
  },
  findAll: async () => {
    return prisma.post.findMany();
  },
  create: async (data: any) => {
    return prisma.post.create({ data });
  },
  update: async (id: string, data: any) => {
    return prisma.post.update({
      where: { id },
      data,
    });
  },
  delete: async (id: string) => {
    return prisma.post.delete({ where: { id } });
  }
};