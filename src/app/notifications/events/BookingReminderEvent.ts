import { NotificationService } from '../notificationService';
import { NotificationEvent } from './NotificationEvent';
import { Booking } from '@/app/types/camp';

export class BookingReminderEvent extends NotificationEvent {
  async notify(booking: Booking): Promise<void> {
    const message = `Reminder: Your booking #${booking.id} is coming up.`;
    await NotificationService.deliverLimited(booking, message, 'booking_reminder');
  }
}