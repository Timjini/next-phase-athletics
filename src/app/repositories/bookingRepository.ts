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
      include: {
        session: true,
      },
    });
  },
  updateBySessionId: async (stripeId: string, data: any) => {
    return prisma.booking.updateMany({
      where: { stripeId },
      data,
    });
  },
  findByQrCode: async (qrCodeData: string) => {
    return prisma.booking.findFirst({
      where: { qrCodeData },
      include: {
        session: true,
      },
    });
  },
  updateByQrCode: async (qrCodeData: string) => {
    return prisma.booking.updateMany({
      where: { qrCodeData },
      data: {
        attended: 'ATTENDED',
        qrCodeUsed: true,
      },
    });
  },
  delete: async (id: string) => {
    return prisma.booking.delete({ where: { id } });
  }
};