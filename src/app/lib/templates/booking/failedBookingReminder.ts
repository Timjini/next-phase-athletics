import "dotenv/config";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.NEXT_SENDGRID_KEY!);

interface BookingEmailParams {
    id: string;
    email: string;
    name: string;
    camp: string;
    startDate: any;
    endDate: any;
    period: any;
  }
export const failedBookingReminderEmail = async ({
    id,
    email,
    name,
    camp,
    startDate,
    endDate,
    period,
  }: BookingEmailParams) => {
    const msg = {
      to: email,
      from: process.env.SENDGRID_FROM_EMAIL!,
      subject: `⏰ Reminder: Complete Your ${camp} Booking Payment`,
      html: `
        <div style="max-width: 600px; margin: auto; font-family: sans-serif; background: #ffffff; border: 1px solid #eee; padding: 24px; border-radius: 12px;">
          <h2 style="text-align: center; color: #2E86AB;">⏰ Payment Reminder</h2>
          <p>Hi <strong>${name}</strong>,</p>
          <p>We noticed you haven't completed payment for your <strong>${camp}</strong> booking. Here are your booking details:</p>
  
          <div style="background: #f8f8f8; padding: 16px; border-radius: 8px; margin: 20px 0;">
            <p><strong>📅 Dates:</strong> ${startDate} – ${endDate}</p>
            <p><strong>🕐 Time Period:</strong> ${period}</p>
            <p><strong>🎫 Booking ID:</strong> ${id}</p>
          </div>
  
          <p style="text-align: center; margin: 32px 0;">
            <a href="https://localhost:3000/contact" style="background-color: #2E86AB; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Complete Payment Now</a>
          </p>
  
          <p>Your spot is reserved but won't be confirmed until payment is received. Please complete your payment as soon as possible to avoid cancellation.</p>
  
          <p style="margin-top: 32px;">If you have any questions or need assistance, feel free to reach out to us.</p>
  
          <p style="margin-top: 32px;">Warm regards,<br><strong>The Camp Team</strong></p>
          
          <hr style="margin: 32px 0;" />
          <p style="font-size: 12px; color: #777;">This is an automated payment reminder. If you've already paid, please ignore this email.</p>
        </div>
      `,
    };
  
    await sgMail.send(msg);
  };