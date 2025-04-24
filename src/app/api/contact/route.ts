// app/api/contact/route.ts
import { sendContactConfirmationEmail, sendContactNotificationEmail } from "@/app/lib/email/contactEmails";
import { contactRepository } from "@/app/repositories/contactRepository";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const contact = await contactRepository.create({
      name: body.name,
      email: body.email,
      phone: body.phone || "",
      message: body.message,
    });

    try{
        await Promise.all([
            sendContactConfirmationEmail({
              id: contact.id,
              name: contact.name,
              email: contact.email,
              phone: contact.phone || "",
              message: contact.message,
            }),
            sendContactNotificationEmail({
              id: contact.id,
              name: contact.name,
              email: contact.email,
              phone: contact.phone || "",
              message: contact.message,
            }),
          ]);
        console.log("Confirmation email sent successfully");
    } catch (error) {
        console.error("Error sending confirmation email:", error);
    }    

    return NextResponse.json(
      { success: true, data: contact },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      );
    }

    console.error("Error creating contact:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}