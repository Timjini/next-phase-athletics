import { Booking } from '@/app/types/camp';
import { NotificationChannel } from './NotificationChannel';

export class EmailChannel implements NotificationChannel {
  async send(booking: Booking, message: string): Promise<void> {
    // Use booking.userEmail or similar
    console.log(`📧 Email to ${booking.email}: ${message}`);
    // sendEmail(booking.userEmail, message);
  }
}
