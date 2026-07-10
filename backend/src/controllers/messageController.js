import Message from '../models/Message.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import nodemailer from 'nodemailer';

export const createMessage = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    const newMessage = await Message.create({ name, email, subject, message });

    console.log("✅ Message saved to database");

    await sendEmailNotification(name, email, subject, message);

    res.status(201).json(
      new ApiResponse(201, newMessage, 'Message sent successfully! I will reach you soon.')
    );

  } catch (error) {
    console.error("❌ Error:", error.message);
    next(error);
  }
};

const sendEmailNotification = async (name, email, subject, messageText) => {
  try {
    console.log("Trying to send email to:", process.env.EMAIL_USER);
    console.log("Using App Password length:", process.env.EMAIL_PASS?.length);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
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
    console.log("✅ Email sent successfully!");

  } catch (err) {
    console.error("❌ Email Error:", err.message);
    console.error("Full error:", err);
  }
};