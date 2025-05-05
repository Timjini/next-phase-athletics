import { fetchMissingTokenBookingsConfig } from '@/jobs/missingBookingToken';
import { cronQueue } from './queue';
import { fetchPendingBookingsConfig } from '@/jobs/pendingBookingReminder';
import { fetchAthleteRegistrationConfig } from '@/jobs/athleteRegistrationReminder';

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
    await cronQueue.add(
      fetchMissingTokenBookingsConfig.name,
      {},
      {
        repeat: {
          pattern: fetchMissingTokenBookingsConfig.cron,
        },
        removeOnComplete: true,
      }
    );
    await cronQueue.add(
      fetchAthleteRegistrationConfig.name,
      {},
      {
        repeat: {
          pattern: fetchAthleteRegistrationConfig.cron,
        },
        removeOnComplete: true,
      }
    )
  };
