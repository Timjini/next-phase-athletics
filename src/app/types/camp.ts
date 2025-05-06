import { AttendanceStatus, BookingStatus, PaymentStatus } from "@/generated/prisma";

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
  campSessions: CampSession[];
  athlete_registrations?: Partial<AthleteRegistration>[];
  stripeId?: string;

  amount: number;
  // campName: string[];
  athleteName: string;
  email: string;
  phone: string | null;
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  rawData?: string | null;
  acceptedTerms: boolean;
  attended: AttendanceStatus;
  qrCodeData: string | null;
  qrCodeUrl: string | null;
  tShirtSize: string | null;
  subscribeToProgram: boolean | null;
  token: string | null;
  qrCodeUsed?: boolean;

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


export type AthleteRegistration = {
  id: string;
  createdAt: Date;
  updatedAt: Date;

  name: string;
  dateOfBirth: Date;
  age: number;
  gender: string;
  schoolYear: string;
  schoolName: string;

  primarySport: string;
  secondarySport: string | null;
  athleticLevel: string;
  goals: string;
  preferredPosition?: string | null;

  allergies: string;
  medicalConditions: string;
  medications?: string | null;
  injuryHistory?: string | null;
  emergencyContactName: string;
  emergencyContactPhone: string;
  familyDoctor?: string | null;
  doctorContactInfo?: string | null;

  dietaryRestrictions?: string | null;
  photoPermission: boolean;
  hearAboutUs: string;
  additionalNotes?: string | null;

  infoAccurate: boolean;
  termsAgreed: boolean;
  medicalConsent: boolean;

  bookingId: string;
  booking?: Booking;
};

export type CheckoutFormData = {
  campIds: string[];
  camp: string[];
  athleteName: string;
  guardianName: string;
  email: string;
  phone: string;
  address: {
    address: string;
    lat: number;
    lng: number;
  };
  acceptedTerms: boolean;
  tShirtSize: string;
  subscribeToProgram: boolean;
  price: number;
  stripeId: string;
};
