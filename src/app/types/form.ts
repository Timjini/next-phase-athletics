import { z } from "zod";

export const formSchema = z.object({
  camp: z.array(z.string()).nonempty("Please select at least one camp"),
  athleteName: z.string().min(2, "Required"),
  guardianName: z.string().min(2, "Required"),
  email: z.string().email(),
  phone: z.string().min(6),
  address: z.object({
    address: z.string().optional(),
    lat: z.number().nullable().optional(),
    lng: z.number().nullable().optional(),
  }),
  acceptedTerms: z.literal(true),
  tShirtSize: z.enum(["S", "M", "L", "XL", "XXL"]),
  subscribeToProgram: z.boolean().optional(),
});

export type FormValues = z.infer<typeof formSchema>;