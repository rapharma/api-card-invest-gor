const express = require('express');

const User = require('../models/User');

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
            return res.status(400).send({ erro: 'Email already exists' });

        const user = await User.create(req.body);

        return res.send({ 
            mensagem: 'Registered with success!',
            token: generateToken({ id: user.id }) 
        });

    } catch (err) {
        return res.status(400).send({ error: 'Register failed : (', err });
    }
});

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user)
        return res.status(400).send({ erro: 'Email não encontrado' });

    if (password != user.password)
        return res.status(400).send({ erro: 'Senha incorreta' });

    res.send({ 
        mensagem: 'Login realizado com sucesso!',
        token: generateToken({ id: user.id }) 
    });

});

module.exports = app => app.use('/auth', router);

