import Message from '../models/Message.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';

// @desc    Create new message
// @route   POST /api/messages
export const createMessage = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    const newMessage = await Message.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json(
      new ApiResponse(201, newMessage, 'Message sent successfully!')
    );
  } catch (error) {
    next(error);
  }
};

// @desc    Get all messages (for future admin panel)
// @route   GET /api/messages
export const getAllMessages = async (req, res, next) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    
    res.status(200).json(
      new ApiResponse(200, messages, 'Messages fetched successfully')
    );
  } catch (error) {
    next(error);
  }
};