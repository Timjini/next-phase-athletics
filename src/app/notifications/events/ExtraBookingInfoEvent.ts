import { NotificationEvent } from './NotificationEvent';
import { NotificationService } from '../notificationService';
import { Booking } from '@/app/types/camp';
import { athleteInfoReminder } from '@/app/lib/templates/booking/athleteInfoReminder';

export class ExtraBookingInfoEvent extends NotificationEvent {
  async notify(booking: Booking): Promise<void> {
    const message = athleteInfoReminder(booking);
    await NotificationService.deliverUntilCompleted(booking, message, 'extra_info');
  }
}