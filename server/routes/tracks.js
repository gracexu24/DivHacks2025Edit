const express = require('express');
const router = express.Router();
const Track = require('../models/Track');

// Get all tracks
router.get('/', async (req, res) => {
  try {
    const tracks = await Track.find();
    res.json(tracks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add new track
router.post('/', async (req, res) => {
  const track = new Track({
    title: req.body.title,
    description: req.body.description,
    icon: req.body.icon
  });

  try {
    const newTrack = await track.save();
    res.status(201).json(newTrack);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router; 