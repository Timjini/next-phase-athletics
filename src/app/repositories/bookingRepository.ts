import { prisma } from '../lib/prisma';
import { BookingStatus } from '../types/camp';

export const bookingRepository = {
  findById: async (id: string) => {
    return prisma.booking.findUnique({ where: { id },include: {
      campSessions: {
        include: {
          campProgram: true,
        },
      },
      notifications: true,
      athlete_registrations: true,
    }, 
  });
  },
  findAll: async () => {
    return prisma.booking.findMany({
      include: {
        campSessions: true,
        athlete_registrations: true,
      },
    });
  },
  create: async (data: any) => {
    return prisma.booking.create({ data });
  },
  update: async (id: string, data: any) => {
    return prisma.booking.update({
      where: { id },
      data,
      include: {
        campSessions: true,
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
        campSessions: true,
      },
    });
  },
  findPendingPaymentBooking: async (status: BookingStatus) => {
    return prisma.booking.findMany({
      where: { status },
      include: {
        campSessions: true,
      }
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