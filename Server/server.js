const express = require('express');
const cors = require('cors');
const helmet = require('helmet'); // Security headers
const app = express();

const PORT = process.env.PORT || 5000;

// Use Helmet for basic security
app.use(helmet());

// CORS configuration
const allowedOrigins = [
  'http://ec2-13-201-184-236.ap-south-1.compute.amazonaws.com',
  'https://ec2-13-201-184-236.ap-south-1.compute.amazonaws.com'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());

// Simple test route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
