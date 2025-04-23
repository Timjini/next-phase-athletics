import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

interface ConfirmationEmailParams {
  email: string;
  name: string;
  camp: string;
  date?: string;
}

export const sendConfirmationEmail = async ({
  email,
  name,
  camp,
  date,
}: ConfirmationEmailParams) => {
  const msg = {
    to: email,
    from: process.env.SENDGRID_FROM_EMAIL!, // e.g. "no-reply@yourdomain.com"
    subject: `Your camp registration is confirmed! 🎉`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; background: #f9f9f9; border-radius: 8px;">
        <h2>Hello ${name},</h2>
        <p>Thanks for registering for <strong>${camp}</strong>.</p>
        ${
          date
            ? `<p>🗓️ The camp will be held on <strong>${date}</strong>.</p>`
            : ""
        }
        <p>We're excited to see you there!</p>
        <br />
        <p>— The Camp Team</p>
      </div>
    `,
  };

  await sgMail.send(msg);
};
