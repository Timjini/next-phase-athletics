import { Booking } from "@/app/types/camp";

export abstract class NotificationEvent {
  abstract notify(booking: Booking): Promise<void>;
}