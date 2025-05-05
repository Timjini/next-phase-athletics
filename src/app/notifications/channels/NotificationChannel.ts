import { Booking } from "@/app/types/camp";

export interface NotificationChannel {
  send(booking: Booking, message: string): Promise<void>;
}