import { prisma } from '../lib/prisma';

export const bookingRepository = {
  findById: async (id: string) => {
    return prisma.booking.findUnique({ where: { id } });
  },
  findAll: async () => {
    return prisma.booking.findMany();
  },
  create: async (data: any) => {
    return prisma.booking.create({ data });
  },
  update: async (id: string, data: any) => {
    return prisma.booking.update({
      where: { id },
      data,
    });
  },
  delete: async (id: string) => {
    return prisma.booking.delete({ where: { id } });
  }
};