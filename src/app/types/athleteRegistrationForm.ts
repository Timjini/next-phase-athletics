import { z } from "zod";

const schoolYears = [
  'Year 5', 'Year 6', 'Year 7', 'Year 8', 'Year 9', 
  'Year 10', 'Year 11', 'Year 12', 'Year 13',
  'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
  'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10',
  'Grade 11', 'Grade 12'
] as const;

const popularSports = [
  'Football', 'Basketball', 'Tennis', 'Swimming', 'Athletics',
  'Cricket', 'Rugby', 'Hockey', 'Netball', 'Volleyball',
  'Gymnastics', 'Badminton', 'Table Tennis', 'Cycling', 'Other'
] as const;

export const athleteRegistrationSchema = z.object({
  // Personal Information
  name: z.string().min(1, "Please enter your full name"),
  dateOfBirth: z.date().refine(date => {
    const today = new Date();
    return date <= today;
  }, {
    message: "Date of birth must be in the past"
  }),
  age: z.number().int().positive({ message: "Age must be a positive whole number" }),
  gender: z.string().refine(val =>
    ["Male", "Female", "Non-binary", "Prefer not to say", "Other"].includes(val), {
    message: "Please select your gender"
  }) as z.ZodType<"Male" | "Female" | "Non-binary" | "Prefer not to say" | "Other">,
  
  schoolYear: z.string().refine(val => schoolYears.includes(val as any), {
    message: "Please select your school year"
  }) as z.ZodType<typeof schoolYears[number]>,
  
  schoolName: z.string().min(1, "Please enter your school name"),

  // Sport & Athletic Profile
  primarySport: z.string().refine(val => popularSports.includes(val as any), {
    message: "Please select your primary sport"
  }) as z.ZodType<typeof popularSports[number]>,

  secondarySport: z.string().optional(),
  
  athleticLevel: z.string().refine(val =>
    ["Development", "Intermediate", "Advanced"].includes(val), {
    message: "Please select your athletic level"
  }) as z.ZodType<"Development" | "Intermediate" | "Advanced">,

  goals: z.string().min(1, "Please describe your goals"),
  preferredPosition: z.string().optional(),

  // Health & Medical Information
  allergies: z.string().min(1, "Please specify 'None' if no allergies"),
  medicalConditions: z.string().min(1, "Please specify 'None' if no conditions"),
  medications: z.string().optional(),
  injuryHistory: z.string().optional(),
  emergencyContactName: z.string().min(1, "Please enter the name of your emergency contact"),
  emergencyContactPhone: z.string().min(1, "Please enter a phone number for your emergency contact"),
  familyDoctor: z.string().optional(),
  doctorContactInfo: z.string().optional(),
  
  dietaryRestrictions: z.string().optional(),
  photoPermission: z.boolean(),

  hearAboutUs: z.string().refine(val =>
    ["School", "Social Media", "Referral", "Other"].includes(val), {
    message: "Please tell us how you heard about us"
  }) as z.ZodType<"School" | "Social Media" | "Referral" | "Other">,

  additionalNotes: z.string().optional(),

  // Consent
  infoAccurate: z.boolean().refine(val => val === true, {
    message: "You must confirm the information is accurate"
  }),
  termsAgreed: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions"
  }),
  medicalConsent: z.boolean().refine(val => val === true, {
    message: "You must give medical consent"
  }),
});

export type AthleteRegistrationFormData = z.infer<typeof athleteRegistrationSchema>;
