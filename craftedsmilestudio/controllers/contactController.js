// contactController.js
import { getAdminNotificationEmail, getPriceListEmail } from '../utils/emailTemplates.js';
import { sendEmailToClinic, sendEmailToContact } from '../utils/sendEmail.js';
import { cleanPhoneNumber } from "../utils/phoneUtils.js";
import { getPriceListPDF } from '../utils/fileUtils.js';

class ContactController {

  // Handle 'Get In Touch' form submissions securely
  async handleGetInTouchContact(req, res) {
    try {
      // Destructure and sanitize input
      const { firstName, lastName, email, phone, treatment, interest, message } = req.body;

      // Validate required fields (basic example)
      if (!firstName || !email || !phone) {
        return res.status(400).send({ error: "Missing required fields." });
      }

      // Clean and normalize phone number input
      const normalizedPhone = cleanPhoneNumber(phone);

      // Create email content for clinic notification
      const adminEmail = getAdminNotificationEmail(firstName, lastName, email, normalizedPhone, treatment, interest, message);

      // Send email asynchronously without blocking response
      const emailResult = await sendEmailToClinic(adminEmail.subject, adminEmail.body)

      if (!emailResult.success) {
        return res.status(500).send({ error: 'Failed to send email.' });
      }

      // Respond with success status code
      res.status(200).send();

    } catch (error) {
      console.error("Error processing Get In Touch form:", error);
      res.status(500).send({ error: "Failed to process form data." });
    }
  }

  // Handle price list requests by sending PDF and email
  async handlePriceListForm(req, res) {
    try {
      const { firstName, lastName, email } = req.body;

      // Basic validation for required fields
      if (!firstName || !email) {
        return res.status(400).send({ error: "Missing required fields." });
      }

      // Retrieve PDF file buffer and metadata
      const { buffer, filename, path } = await getPriceListPDF();

      // Create email content to send to user
      const priceListEmail = getPriceListEmail(firstName, lastName);

      // Send email with PDF attachment
      const emailResult = await sendEmailToContact(email, priceListEmail.subject, priceListEmail.body, [
        {
          filename,
          content: buffer.toString("base64"),
          type: 'application/pdf',             
          disposition: 'attachment',           
        },
      ]);

      if (!emailResult.success) {
        return res.status(500).send({ error: 'Failed to send email.' });
      }

      // Send PDF file as response for immediate download
      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
      res.setHeader('Content-Type', 'application/pdf');
      return res.send(buffer);

    } catch (error) {
      console.error("Error processing Price List form:", error);
      res.status(500).send({ error: "We couldn't process your request right now. Please try again later." });
    }
  }
}

export default new ContactController();
