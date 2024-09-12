import mongoose from 'mongoose';

const EmailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
    trim: true,
  },
}, { timestamps: true });

export default mongoose.models.Email || mongoose.model('Email', EmailSchema);