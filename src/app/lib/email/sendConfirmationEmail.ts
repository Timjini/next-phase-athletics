import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.NEXT_SENDGRID_KEY!);

interface ConfirmationEmailParams {
  id: string;
  email: string;
  name: string;
  camp: string;
  startDate: string;
  endDate: string;
  period: string;
  qrCodeUrl: string;
  location: string;
  // amount: number;
}

export const sendConfirmationEmail = async ({
  id,
  email,
  name,
  camp,
  startDate,
  endDate,
  period,
  qrCodeUrl,
  location,
}: // amount,
  ConfirmationEmailParams) => {
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
          <p><strong>📍 Camp:</strong> ${camp} <a href="https://www.google.com/maps/search/?api=1&query=${location}" target="_blank" style="color: #2E86AB;">View on Google Maps</a></p>
          <p><strong>📅 Dates:</strong> ${startDate} – ${endDate}</p>
          <p><strong>🕐 Time Period:</strong> ${period}</p>
          <p><strong>🎫 Booking ID:</strong> ${id}</p>
        </div>
        <p>Attached is your QR code for easy check-in at the camp. Please keep this email as your voucher.</p>
        <p style="text-align: center;">
          <img src="${qrCodeUrl}" alt="QR Code" style="width: 200px; height: auto; border-radius: 8px;" />
        </p>
        <p style="margin-top: 32px;">If you have any questions or need assistance, feel free to reach out to us.</p>
        <p style="margin-top: 32px;">We look forward to seeing you at the camp!</p>

        <p>We're excited to have you with us. Please keep this email as your voucher and feel free to contact us with any questions.</p>

        <p style="margin-top: 32px;">Warm regards,<br><strong>The Camp Team</strong></p>
        <hr style="margin: 32px 0;" />
        <p style="font-size: 12px; color: #777;">If you have any questions, reply to this email or contact our support team.</p>
        <p style="font-size: 12px; color: #777;">This email was sent to <strong>info@nxtphs.com</strong>.</p>
        <p style="font-size: 12px; color: #777;">
          Call us at: <a href="tel:+18155568037" style="color: #777; text-decoration: underline;">(815) 556-8037</a>
        </p>

      </div>
    `,
  };

  await sgMail.send(msg);
};
