import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.NEXT_SENDGRID_KEY!);

interface ConfirmationEmailParams {
  email: string;
  name: string;
  camp: string;
  startDate: string;
  endDate: string;
  period: string;
  amount: number;
}

export const sendConfirmationEmail = async ({
  email,
  name,
  camp,
  startDate,
  endDate,
  period,
  amount,
}: ConfirmationEmailParams) => {
  const msg = {
    to: email,
    from: process.env.SENDGRID_FROM_EMAIL!,
    subject: `🎟️ Your Camp Voucher - ${camp}`,
    html: `
      <div style="max-width: 600px; margin: auto; font-family: sans-serif; background: #ffffff; border: 1px solid #eee; padding: 24px; border-radius: 12px;">
        <h2 style="text-align: center; color: #2E86AB;">🎉 Registration Confirmed!</h2>
        <p>Hi <strong>${name}</strong>,</p>
        <p>Thank you for registering for <strong>${camp}</strong>. Here are your booking details:</p>

        <div style="background: #f8f8f8; padding: 16px; border-radius: 8px; margin: 20px 0;">
          <p><strong>📍 Camp:</strong> ${camp}</p>
          <p><strong>📅 Dates:</strong> ${startDate} – ${endDate}</p>
          <p><strong>🕐 Time Period:</strong> ${period}</p>
          <p><strong>💵 Paid:</strong> $${amount.toFixed(2)}</p>
          <p><strong>🎫 Booking ID:</strong> Automatically generated</p>
        </div>

        <p>We're excited to have you with us. Please keep this email as your voucher and feel free to contact us with any questions.</p>

        <p style="margin-top: 32px;">Warm regards,<br><strong>The Camp Team</strong></p>
        <hr style="margin: 32px 0;" />
        <p style="font-size: 12px; color: #777;">If you have any questions, reply to this email or contact our support team.</p>
      </div>
    `,
  };

  await sgMail.send(msg);
};
