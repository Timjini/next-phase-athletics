import { cronQueue } from './queue';
import { fetchPostsConfig } from '../jobs/fetchPostsJob';

export const registerCronJobs = async () => {
    await cronQueue.add(
      fetchPostsConfig.name,
      {},
      {
        repeat: {
            pattern: fetchPostsConfig.cron,
        },
        removeOnComplete: true,
      }
    );
  };
