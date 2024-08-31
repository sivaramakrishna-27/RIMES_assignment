const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

let users = [];
let refreshTokens = [];

// Generate tokens
const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });
};

const generateRefreshToken = (user) => {
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: process.env.REFRESH_TOKEN_EXPIRATION });
    refreshTokens.push(refreshToken);
    return refreshToken;
};

// Register route
router.post('/register', (req, res) => {
    const user = { id: Date.now(), username: req.body.username };
    users.push(user);
    res.status(201).json({ message: 'User registered' });
});

// Login route
router.post('/login', (req, res) => {
    const user = users.find(u => u.username === req.body.username);
    if (!user) return res.status(400).json({ message: 'User not found' });

    const accessToken = generateAccessToken({ id: user.id });
    const refreshToken = generateRefreshToken({ id: user.id });

    res.json({ accessToken, refreshToken });
});

// Refresh token route
router.post('/refresh-token', (req, res) => {
    const { token } = req.body;
    if (!token) return res.status(401).json({ message: 'Token is required' });
    if (!refreshTokens.includes(token)) return res.status(403).json({ message: 'Invalid refresh token' });

    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Token is not valid' });
        const accessToken = generateAccessToken({ id: user.id });
        res.json({ accessToken });
    });
});

module.exports = router;
