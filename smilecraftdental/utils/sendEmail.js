// sendEmail.js
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

// Send email to clinic/admin
export async function sendEmailToClinic(subject, htmlMessage) {
  try {
    const response = await axios.post(
      "https://api.smtp2go.com/v3/email/send",
      {
        api_key: process.env.SMTP2GO_API_KEY, 
        to: [process.env.EMAIL_USER],         
        sender: process.env.EMAIL_USER,        
        subject,
        html_body: htmlMessage,
      }
    );

    return { success: true, data: response.data };
  } catch (error) {
    console.error(
      "Error sending email to clinic:",
      error.response?.data || error.message
    );
    return { success: false, error: error.message };
  }
}

// Send email to contact (patient/user)
export async function sendEmailToContact(email, subject, htmlMessage, attachments = []) {
  try {
    const response = await axios.post(
      "https://api.smtp2go.com/v3/email/send",
      {
        api_key: process.env.SMTP2GO_API_KEY,
        to: [email],
        sender: process.env.EMAIL_USER,
        subject,
        html_body: htmlMessage,
        attachments: attachments.map(file => ({
          filename: file.filename,
          fileblob: typeof file.content === "string"
            ? file.content
            : Buffer.from(file.content).toString("base64"),
        })),
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return { success: true, data: response.data };
  } catch (error) {
    console.error(
      "Error sending email to contact:",
      error.response?.data || error.message
    );
    return { success: false, error: error.message };
  }
}