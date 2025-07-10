require('dotenv').config();               // Load environment variables first
const express = require('express');       // Import express
const app = express();                    // Initialize app
const mongoose = require('mongoose');     // Import mongoose

const userRoutes = require('./routes/user'); // Adjust path if needed

app.use(express.json());                  // Middleware for JSON body


app.get('/', (req, res) => {
    res.send('Doctor Prescription API is running...');
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
