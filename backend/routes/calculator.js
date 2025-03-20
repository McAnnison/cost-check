import express from 'express';
import Room from '../models/Room';
const router = express.Router();

// @route POST /api/rooms
// @desc Save room data
router.post('/rooms', async (req, res) => {
  try {
    const roomData = new Room(req.body);
    const savedRoom = await roomData.save();
    res.status(201).json(savedRoom);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @route GET /api/rooms
// @desc Get all room data
router.get('/rooms', async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route GET /api/rooms/:id
// @desc Get a single room by ID
router.get('/rooms/:id', async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route DELETE /api/rooms/:id
// @desc Delete a room by ID
router.delete('/rooms/:id', async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.status(200).json({ message: 'Room deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route PUT /api/rooms/:id
// @desc Update a room by ID
router.put('/rooms/:id', async (req, res) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedRoom) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.status(200).json(updatedRoom);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;