import Message from '../models/Message.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import nodemailer from 'nodemailer';

const sendEmail = async (name, email, subject, message) => {
  try {
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
        <p>${message}</p>
        <hr>
        <p><em>Sent from Muhammad Ibrahim Khalil Portfolio</em></p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(' Email sent successfully');
  } catch (error) {
    console.error('Email sending failed:', error.message);
  }
};

export const createMessage = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    const newMessage = await Message.create({
      name,
      email,
      subject,
      message,
    });

    // Send email notification
    await sendEmail(name, email, subject, message);

    res.status(201).json(
      new ApiResponse(201, newMessage, 'Message sent successfully! I will reach you soon.')
    );
  } catch (error) {
    next(error);
  }
};