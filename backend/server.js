const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Dummy Data
const data = {
  name: 'Tanvi Gaikwad',
  referralCode: 'tanvi2025',
  donationsRaised: 1234,
  rewards: ['Intern Badge 🏅', 'Workshop Pass 🎓', 'Gift Voucher 🎁'],
  leaderboard: [
    { name: 'Tanvi', donations: 1234 },
    { name: 'Riya', donations: 890 },
    { name: 'Amit', donations: 670 }
  ]
};

// API routes
app.get('/api/dashboard', (req, res) => {
  res.json(data);
});

app.get('/api/leaderboard', (req, res) => {
  res.json(data.leaderboard);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
