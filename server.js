// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);

// Serve HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'login.html'));
});

app.get('/account', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'account.html'));
});

app.get('/forgotpassword', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'forgotPassword.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'dashboard.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
