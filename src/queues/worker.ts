import { Worker } from 'bullmq';
import { cronQueue, connection } from './queue';
import { fetchPendingBookingsConfig, pendingBookingsReminderHandler } from '@/jobs/pendingBookingReminder';
import { fetchMissingTokenBookingsConfig, missingTokenBookingHandler } from '@/jobs/missingBookingToken';

const handlerMap: Record<string, () => Promise<void>> = {
  [fetchPendingBookingsConfig.name]: pendingBookingsReminderHandler,
  [fetchMissingTokenBookingsConfig.name] : missingTokenBookingHandler,
};

const worker = new Worker(
  cronQueue.name,
  async job => {
    const handler = handlerMap[job.name];
    if (handler) {
      await handler();
    } else {
      console.warn(`No handler found for job: ${job.name}`);
    }
  },
  { connection }
);

worker.on('failed', (job, err) => {
    if (job) {
      console.error(`Job ${job.name} failed`, err);
    } else {
      console.error('A job failed, but job info was not available:', err);
    }
  });
