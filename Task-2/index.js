const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./auth');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});