export type CampSession = {
  id: string;
  label: string;
  priority: number;
  startDate: Date;
  startDateString: string;
  endDateString: string;
  endDate: Date;
  period: string;
  availableSlots: number;
  price: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  campProgramId: string;
  campProgram?: CampProgram;
  bookings?: Booking[];
};

export type Booking = {
  id: string;
  session: CampSession;
  sessionId: string;
  stripeId?: string;

  amount: number;
  campName: string;
  athleteName: string;
  email: string;
  phone: string | null;
  status: "PENDING" | "CONFIRMED" | "CANCELLED";
  paymentStatus: "UNPAID" | "PAID" | "REFUNDED";
  rawData?: string | null;
  acceptedTerms: boolean;
  attended: "PENDING" | "ATTENDED" | "NO_SHOW";
  qrCodeData: string | null;
  qrCodeUrl: string | null;
  tShirtSize: string | null;
  subscribeToProgram: boolean | null;

  createdAt: Date;
  updatedAt: Date;
};

export enum SessionPeriod {
  MORNING = "MORNING",
  AFTERNOON = "AFTERNOON",
  EVENING = "EVENING",
}

export enum CampStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  FULL = "FULL",
  CANCELLED = "CANCELLED",
}

export enum BookingStatus {
  PENDING = "PENDING",
  CONFIRMED = "CONFIRMED",
  CANCELLED = "CANCELLED",
}

export enum PaymentStatus {
  UNPAID = "UNPAID",
  PAID = "PAID",
  REFUNDED = "REFUNDED",
}

export type CampProgram = {
  id: string;
  title: string;
  description: string | null;
  imageUrl?: string | null;
  videoUrl?: string | null;
  slug: string;
  location: string;
  lat: number;
  lng: number;
  tShirtSizes: string[];
  subscribeToProgram: boolean;
  createdAt: Date;
  updatedAt: Date;

  sessions: CampSession[];
  hosts: CampProgramHost[];
};

export type Host = {
  id: string;
  name: string;
  bio?: string | null;
  imageUrl?: string | null;
  createdAt: Date;
  updatedAt: Date;

  campPrograms: CampProgramHost[];
};

export type CampProgramHost = {
  id: string;
  campProgramId: string;
  campProgram: CampProgram;
  hostId: string;
  host: Host;
};
