// server.js
// Add this to server.js
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);
// Add this to server.js
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Doctor Prescription API is running...');
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
