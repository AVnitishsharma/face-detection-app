const express = require("express");
const router = express.Router();

// Mock store for session mood history and favorites if DB is not attached
let userFavorites = [];
let userMoodHistory = [];

router.get("/history", (req, res) => {
  res.json({ success: true, history: userMoodHistory });
});

router.post("/history", (req, res) => {
  const { mood, expression, confidence, timestamp } = req.body;
  const entry = {
    id: Date.now().toString(),
    mood: mood || expression,
    confidence: confidence || 95,
    timestamp: timestamp || new Date().toISOString()
  };
  userMoodHistory.unshift(entry);
  if (userMoodHistory.length > 30) userMoodHistory.pop();
  res.json({ success: true, entry });
});

router.get("/favorites", (req, res) => {
  res.json({ success: true, favorites: userFavorites });
});

router.post("/favorites/toggle", (req, res) => {
  const { song } = req.body;
  if (!song || !song.id) {
    return res.status(400).json({ success: false, message: "Invalid song" });
  }

  const index = userFavorites.findIndex((item) => item.id === song.id);
  let isFavorite = false;
  if (index >= 0) {
    userFavorites.splice(index, 1);
  } else {
    userFavorites.push(song);
    isFavorite = true;
  }

  res.json({ success: true, isFavorite, favorites: userFavorites });
});

module.exports = router;
