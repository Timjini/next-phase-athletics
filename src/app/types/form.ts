import { z } from "zod";

export const formSchema = z.object({
  camp: z.string(),
  athleteName: z.string().min(2, "Required"),
  guardianName: z.string().min(2, "Required"),
  email: z.string().email(),
  phone: z.string().min(6),
  address: z.string().min(5),
  cardNumber: z.string().min(12),
  expiry: z.string().min(4),
  cvc: z.string().min(3).max(4),
});

export type FormValues = z.infer<typeof formSchema>;