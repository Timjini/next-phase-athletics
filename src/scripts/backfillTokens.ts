import { prisma } from "@/app/lib/prisma";
import { generateBookingToken } from "@/app/utils/token";

async function backfillTokens() {
  const bookingsWithoutToken = await prisma.booking.findMany({
    where: { token: null },
  });

  console.log(`Found ${bookingsWithoutToken.length} bookings to update.`);

  for (const booking of bookingsWithoutToken) {
    const token = generateBookingToken(booking.id);

    await prisma.booking.update({
      where: { id: booking.id },
      data: { token },
    });

    console.log(`Updated booking ${booking.id}`);
  }

  console.log('Token backfill complete.');
}

backfillTokens()
  .catch((err) => {
    console.error('Error backfilling tokens:', err);
  })
  .finally(() => process.exit());
