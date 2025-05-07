import { prisma } from "@/app/lib/prisma";

/**
 * Check if a notification for the given booking ID was sent in the last 24 hours.
 */
export const checkNotification = async (bookingId: string): Promise<boolean> => {
  const log = await prisma.notificationLog.findFirst({
    where: {
      bookingId,
      sentAt: {
        gte: new Date(Date.now() - 48 * 60 * 60 * 1000),
      },
    },
  });

  return !!log; // true if a recent log exists
};
