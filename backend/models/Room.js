import mongoose from "mongoose";

// Define the schema for room data
const roomSchema = new mongoose.Schema({
  roomType: { type: String, required: true }, // e.g., Bedroom, Bathroom
  count: { type: Number, required: true }, // Number of rooms
  size: { type: String, required: true }, // e.g., Small, Medium, Large
  hasPet: { type: Boolean, default: false }, // Whether the user has a pet
  gardening: { type: Boolean, default: false }, // Whether gardening is included
  totalCost: { type: Number, required: true }, // Total calculated cost
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

// Create and export the Room model
module.exports = mongoose.model('Room', roomSchema);