import { Worker } from 'bullmq';
import { cronQueue, connection } from './queue';
import { fetchPendingBookingsConfig, fetchPendingBookingsHandler } from '@/jobs/fetchPendingBooking';

const handlerMap: Record<string, () => Promise<void>> = {
  [fetchPendingBookingsConfig.name]: fetchPendingBookingsHandler,
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
