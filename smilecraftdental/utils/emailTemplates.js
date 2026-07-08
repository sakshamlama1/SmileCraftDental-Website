// emailTemplates.js
export const getAdminNotificationEmail = (firstName, lastName, email, phone, treatment, interest, message) => ({
  subject: "IMPORTANT: New Get In Touch Form Submission",
  body: `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px;">
      <h2 style="color: #5B9D7D; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Inquiry Received</h2>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Treatment:</strong> ${treatment}</p>
      <p><strong>Interest:</strong> ${interest}</p>
      <p><strong>Message:</strong> ${message}</p>
      <br />
      <p style="font-size: 12px; color: #999; text-align: center;">
        This email was generated from your website's Get In Touch form.
      </p>
    </div>`
});

export const getPriceListEmail = (firstName, lastName) => ({
  subject: 'Your Requested Price List from Smile Craft Dental',
  body: `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px;">
      <h2 style="color: #5B9D7D; border-bottom: 1px solid #eee; padding-bottom: 10px;">Thank You for Your Interest</h2>
      <p>Dear ${firstName} ${lastName},</p>
      <p>Thank you for reaching out! Please find the requested price list attached.</p>
      <p>If you have any questions, contact us anytime at:</p>
      <p>📞 <strong>Phone:</strong> (02) 6555 8989 <br/> ✉️ <strong>Email:</strong> info@smilecraftdental.com</p>
      <br/>
      <p>Best regards,<br/><strong>The Smile Craft Dental Team</strong></p>
      <hr />
      <p style="font-size: 12px; color: #999; text-align: center;">
        This is an automated email. Please do not reply.
      </p>
    </div>`
});
