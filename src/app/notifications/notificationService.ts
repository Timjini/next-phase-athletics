import { NotificationChannel } from './channels/NotificationChannel';
import { EmailChannel } from './channels/EmailChannel';
import { Booking } from '../types/camp';
import { NotificationTracker } from './notificationTracker';

export class NotificationService {
  static async deliverLimited(
    booking: Booking,
    message: string,
    eventType: string,
    channels: NotificationChannel[] = [new EmailChannel()]
  ) {
    const tooMany = await NotificationTracker.tooManySent(booking.id, eventType);
    if (tooMany) return;

    for (const channel of channels) {
      await channel.send(booking, message);
      await NotificationTracker.markSent(booking.id, eventType, channel.constructor.name.toLowerCase());
    }
  }

  static async deliverUntilCompleted(
    booking: Booking,
    message: any,
    eventType: string,
    channels: NotificationChannel[] = [new EmailChannel()]
  ) {
    const isDone = await NotificationTracker.taskCompleted(booking.id, eventType);
    if (isDone) return;

    for (const channel of channels) {
      await channel.send(booking, message);
      await NotificationTracker.markSent(booking.id, eventType, channel.constructor.name.toLowerCase());
    }
  }
}
