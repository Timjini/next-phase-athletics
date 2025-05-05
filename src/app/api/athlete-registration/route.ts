// pages/api/athlete-registration.ts
import { prisma } from "@/app/lib/prisma";
import { athleteRegistrationSchema } from "@/app/types/athleteRegistrationForm";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // Validate the request body
    const validatedData = athleteRegistrationSchema.parse(req.body);

    // Convert date string to Date object
    const dateOfBirth = new Date(validatedData.dateOfBirth);

    // Create the athlete registration in the database
    const registration = await prisma.athleteRegistration.create({
      data: {
        ...validatedData,
        dateOfBirth,
        bookingId: req.body.bookingId,
      },
    });

    return res.status(201).json(registration);
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(400).json({ message: "Invalid data", error });
  }
}