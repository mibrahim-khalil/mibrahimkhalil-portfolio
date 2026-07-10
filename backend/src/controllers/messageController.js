import Message from '../models/Message.js';
import { ApiResponse } from '../utils/ApiResponse.js';

export const createMessage = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    const newMessage = await Message.create({
      name,
      email,
      subject,
      message,
    });

    console.log("✅ Message saved to database successfully");

    // Try to send email but don't fail the request if it fails
    try {
      await sendEmailNotification(name, email, subject, message);
    } catch (emailError) {
      console.error("⚠️ Email sending failed (but message was saved):", emailError.message);
    }

    res.status(201).json(
      new ApiResponse(201, newMessage, 'Message sent successfully! I will reach you soon.')
    );

  } catch (error) {
    console.error("❌ Error saving message:", error.message);
    next(error);
  }
};

// Email function (kept for future improvement)
const sendEmailNotification = async (name, email, subject, messageText) => {
  const nodemailer = (await import('nodemailer')).default;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Portfolio" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `New Message: ${subject}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${messageText}</p>
      <hr>
      <small>Sent from Muhammad Ibrahim Khalil Portfolio</small>
    `,
  };

  await transporter.sendMail(mailOptions);
  console.log("✅ Email sent successfully");
};