import { prisma } from "../lib/prisma";

export const NotificationTracker = {
  async tooManySent(bookingId: string, eventType: string, max = 3): Promise<boolean> {
    const count = await prisma.notificationLog.count({
      where: { bookingId, eventType },
    });
    return count >= max;
  },

  async taskCompleted(bookingId: string, eventType: string): Promise<boolean> {
    const booking = await prisma.booking.findUnique({ where: { id: bookingId } });
    return booking?.status === 'CONFIRMED';
  },

  async markSent(bookingId: string, eventType: string, channel: string, toAdmin = false): Promise<void> {
    await prisma.notificationLog.create({
      data: {
        bookingId,
        eventType,
        channel,
        toAdmin,
        sentAt: new Date(),
      },
    });
  }
};
