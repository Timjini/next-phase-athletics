export type CampSession = {
    id: string;
    label: string;
    startDate: Date;
    endDate: Date;
    period: SessionPeriod;
    availableSlots: number;
    price: number;
    status: CampStatus;
    createdAt: Date;
    updatedAt: Date;
  
    campProgramId: string;
    campProgram: CampProgram;
    bookings: Booking[];
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
  
  export type Booking = {
    id: string;
    sessionId: string;
    session: CampSession;
  
    amount: number;
    campName: string;
    athleteName: string;
    email: string;
    status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
    paymentStatus: 'UNPAID' | 'PAID' | 'REFUNDED';
    rawData?: string | null;
    acceptedTerms: boolean;
  
    createdAt: Date;
    updatedAt: Date;
  };
  
  export enum SessionPeriod {
    MORNING = 'MORNING',
    AFTERNOON = 'AFTERNOON',
    EVENING = 'EVENING',
  }
  
  export enum CampStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    FULL = 'FULL',
    CANCELLED = 'CANCELLED',
  }
  
  export enum BookingStatus {
    PENDING = 'PENDING',
    CONFIRMED = 'CONFIRMED',
    CANCELLED = 'CANCELLED',
  }
  
  export enum PaymentStatus {
    UNPAID = 'UNPAID',
    PAID = 'PAID',
    REFUNDED = 'REFUNDED',
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
    createdAt: Date;
    updatedAt: Date;
  
    sessions: CampSession[];
    hosts: CampProgramHost[];
  };
  