const express = require('express');
const User = require('../models/users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
        return res.status(400).json({ message: 'User already registered!' });
    };

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ email, password: hashPassword });
    await newUser.save();

    const token = generateToken({ _id: newUser._id, email: newUser.email });
    res.status(201).json(token);
});

const generateToken = (data) => {
    return jwt.sign(
        data,
        process.env.JWT_KEY,
        { expiresIn: '2h' }
    );
};

module.exports = router;