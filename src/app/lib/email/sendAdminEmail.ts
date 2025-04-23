import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.NEXT_SENDGRID_KEY!);

interface ConfirmationEmailParams {
  email: string;
  phone: string;
  name: string;
  camp: string;
  startDate: string;
  endDate: string;
  period: string;
}

export const sendAdminNotificationEmail = async ({
  email,
  phone,
  name,
  camp,
  startDate,
  endDate,
  period,
}: ConfirmationEmailParams) => {
  const msg = {
    to: process.env.ADMIN_NOTIFICATION_EMAIL!,
    from: process.env.SENDGRID_FROM_EMAIL!,
    subject: `New Camp Registration: ${name} - ${camp}`,
    html: `
        <div style="max-width: 600px; margin: auto; font-family: sans-serif; background: #ffffff; border: 1px solid #ddd; padding: 24px; border-radius: 12px;">
          <h2 style="text-align: center; color: #2E86AB;">📋 New Registration Received</h2>
          <p><strong>Registrant Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Camp Name:</strong> ${camp}</p>
          <p><strong>Dates:</strong> ${startDate} – ${endDate}</p>
          <p><strong>Session Period:</strong> ${period}</p>
          <p><strong>Booking Status:</strong> Confirmed</p>
  
          <hr style="margin: 32px 0;" />
          <p style="font-size: 12px; color: #777;">This is an automated notification for internal use. Please do not reply directly.</p>
        </div>
      `,
  };

  await sgMail.send(msg);
};
