import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.NEXT_SENDGRID_KEY!);

interface ContactEmailParams {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendContactConfirmationEmail = async ({
  id,
  name,
  email,
  phone,
  message,
}: ContactEmailParams) => {
  const msg = {
    to: email,
    from: process.env.SENDGRID_FROM_EMAIL!,
    subject: `📬 Thank you for contacting us!`,
    html: `
      <div style="max-width: 600px; margin: auto; font-family: sans-serif; background: #ffffff; border: 1px solid #eee; padding: 24px; border-radius: 12px;">
        <h2 style="text-align: center; color: #2E86AB;">Thank you for reaching out!</h2>
        <p>Hi <strong>${name}</strong>,</p>
        <p>We've received your message and our team will get back to you shortly.</p>

        <div style="background: #f8f8f8; padding: 16px; border-radius: 8px; margin: 20px 0;">
          <p><strong>📝 Your message:</strong></p>
          <p style="font-style: italic;">"${message}"</p>
          <p><strong>📧 Your email:</strong> ${email}</p>
          ${phone ? `<p><strong>📞 Your phone:</strong> ${phone}</p>` : ''}
          <p><strong>🆔 Reference ID:</strong> ${id}</p>
        </div>

        <p>We typically respond within 1-2 business days. If your inquiry is urgent, please feel free to call us directly.</p>

        <p style="margin-top: 32px;">Warm regards,<br><strong>The Support Team</strong></p>
        
        <hr style="margin: 32px 0;" />
        <p style="font-size: 12px; color: #777;">If you have any questions, reply to this email or contact our support team.</p>
        <p style="font-size: 12px; color: #777;">This email was sent from <strong>info@nxtphs.com</strong>.</p>
        <p style="font-size: 12px; color: #777;">
          Call us at: <a href="tel:+18155568037" style="color: #777; text-decoration: underline;">(815) 556-8037</a>
        </p>
      </div>
    `,
  };

  await sgMail.send(msg);
};

export const sendContactNotificationEmail = async ({
  id,
  name,
  email,
  phone,
  message,
}: ContactEmailParams) => {
  const msg = {
    to: process.env.ADMIN_NOTIFICATION_EMAIL!,
    from: process.env.SENDGRID_FROM_EMAIL!,
    subject: `📩 New Contact Form Submission: ${name}`,
    html: `
      <div style="max-width: 600px; margin: auto; font-family: sans-serif; background: #ffffff; border: 1px solid #eee; padding: 24px; border-radius: 12px;">
        <h2 style="text-align: center; color: #2E86AB;">New Contact Submission</h2>
        <p>A new message has been received through the contact form:</p>

        <div style="background: #f8f9fa; padding: 16px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2E86AB;">
          <p><strong>👤 Name:</strong> ${name}</p>
          <p><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${phone ? `<p><strong>📞 Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
          <p><strong>🆔 Reference ID:</strong> ${id}</p>
          <p><strong>📝 Message:</strong></p>
          <p style="white-space: pre-wrap; background: white; padding: 10px; border-radius: 4px;">${message}</p>
        </div>

        <div style="margin-top: 24px; text-align: center;">
          <a href="mailto:${email}" style="background-color: #2E86AB; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block;">
            Reply to ${name.split(' ')[0]}
          </a>
        </div>

        <p style="margin-top: 32px; font-size: 14px; color: #666;">
          This message was automatically generated from the contact form on your website.
        </p>
      </div>
    `,
  };

  await sgMail.send(msg);
};