import "dotenv/config";
import sgMail from "@sendgrid/mail";
import { Booking } from "@/app/types/camp";

sgMail.setApiKey(process.env.NEXT_SENDGRID_KEY!);

export const athleteInfoReminder = async (booking: Booking): Promise<void> => {
  const { id, email, athleteName: name, campName: camp, token: token} = booking;

  const msg = {
    to: email,
    from: process.env.SENDGRID_FROM_EMAIL!,
    subject: `⏰ Reminder: Complete Your Information for ${camp} Camp`,
    html: `
      <div style="max-width: 600px; margin: auto; font-family: sans-serif; background: #ffffff; border: 1px solid #eee; padding: 24px; border-radius: 12px;">
        <h2 style="text-align: center; color: #2E86AB;">⏰ Complete Your Information for ${camp}</h2>
        <p>Hi <strong>${name}</strong>,</p>
        <p>We noticed that you haven’t filled out the required information for your <strong>${camp}</strong> booking. In order to attend the camp, please complete the following form:</p>

        <div style="background: #f8f8f8; padding: 16px; border-radius: 8px; margin: 20px 0;">
          <p><strong>🎫 Booking ID:</strong> ${id}</p>
        </div>

        <p><strong>✅ Step: Complete your personal details:</strong></p>
        <p style="text-align: center; margin: 32px 0;">
          <a href="https://nxtphs.com/athlete-form/${token}" style="background-color: #2E86AB; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Fill Out the Form</a>
        </p>

        <p>Your spot at the camp is reserved, but you won’t be able to attend until you complete this form with your personal information.</p>

        <p style="margin-top: 32px;">If you have any questions or need assistance, feel free to reach out to us.</p>

        <p style="margin-top: 32px;">Warm regards,<br><strong>The Camp Team</strong></p>
        
        <hr style="margin: 32px 0;" />
        <p style="font-size: 12px; color: #777;">This is an automated reminder. If you’ve already filled out the form, please ignore this email.</p>
      </div>
    `,
  };

  await sgMail.send(msg);
};
