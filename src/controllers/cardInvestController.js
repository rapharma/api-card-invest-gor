const express = require('express');

const router = express.Router();

const authMiddle = require('../middle/auth');

router.use(authMiddle);

router.get('/', (req, res) => {

    res.send({ ok: true, user: req.userId})
 
});

module.exports = app => app.use('/card-invest', router);

