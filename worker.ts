// import { registerCronJobs } from './src/queues/cronScheduler';
import { registerCronJobs } from '@/queues/cronScheduler';
import './src/queues/worker';

(async () => {
  await registerCronJobs();
  console.log('Worker and cron jobs running...');
})();
