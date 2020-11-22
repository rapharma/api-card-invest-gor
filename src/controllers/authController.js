const express = require('express');

const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {

    try {

        console.log(req.body)

        const user = await User.create(req.body);

        return res.send({ user });

    } catch (err) {
        return res.status(400).send({ error: 'A operação falhou', err })
    }
});

module.exports = app => app.use('/auth', router);

