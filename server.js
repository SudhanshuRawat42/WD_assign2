// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Import your routes
const contactsRoutes = require('./routes/contactsRoutes');
const usersRoutes = require('./routes/usersRoutes');

// Use environment variables
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(error => console.error('MongoDB connection error:', error));

// Define routes
app.use('/api/contacts', contactsRoutes);
app.use('/api/users', usersRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send("Welcome to Portfolio Backend API");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
