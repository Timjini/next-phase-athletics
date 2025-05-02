import { cronQueue } from './queue';
import { fetchPendingBookingsConfig } from '@/jobs/fetchPendingBooking';

export const registerCronJobs = async () => {
    await cronQueue.add(
      fetchPendingBookingsConfig.name,
      {},
      {
        repeat: {
          pattern: fetchPendingBookingsConfig.cron,
        },
        removeOnComplete: true,
      }
    );
  };
