const express = require('express');

const User = require('../models/user');

const router = express.Router();

const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth');

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, { expiresIn: 86400 });
}

router.post('/register', async (req, res) => {

    const { email } = req.body;

    try {

        if (await User.findOne({ email }))
            return res.status(400).send({ error: 'Email already exists' });

        const user = await User.create(req.body);

        return res.send(
            { 
                mensagem: 'Registered with success!',
                user: user
            });

    } catch (err) {
        return res.status(400).send({ error: 'Register failed : (', err });
    }
});

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user)
        return res.status(400).send({ error: 'Email not found' });

    if (password != user.password)
        return res.status(400).send({ error: 'Incorrect password' });

    res.send(
        { 
            mensagem: 'Logged successfully!',
            token: generateToken({ id: user.id }) 
        });

});

module.exports = app => app.use('/auth', router);

