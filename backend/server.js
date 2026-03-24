require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Routes (to be added)
// app.use('/api/items', require('./routes/itemRoutes'));
// app.use('/api/categories', require('./routes/categoryRoutes'));
// app.use('/api/transactions', require('./routes/transactionRoutes'));
// app.use('/api/users', require('./routes/userRoutes'));

// Health Check Route
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
