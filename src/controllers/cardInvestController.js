const express = require('express');

const router = express.Router();

const authMiddle = require('../middle/auth');

const Project = require('../models/Project');
const Task = require('../models/Task');

router.use(authMiddle);

/**
* @api {get} / List all investments
**/

router.get('/', async (req, res) => {
    try {
        const investments = await Project.find().populate('user');
        return res.send({ investments });
    } catch (err) {
        return res.status(400).send({ erro: 'Load investments failed' })
    }
});

/**
* @api {get} / List investments by id
**/

router.get('/:projectId', async (req, res) => {
    try {
        const investment = await Project.findById(req.params.projectId).populate('user');
        return res.send({ investment });
    } catch (err) {
        return res.status(400).send({ erro: 'Load investiment failed' })
    }
});

/**
* @api {post} / Create investment
**/

router.post('/', async (req, res) => {
    try {
        const investment = await Project.create({ ...req.body, user: req.userId });
        return res.send({ investment });
    } catch (err) {
        return res.status(400).send({ erro: 'Create investiment failed' })
    }
});

/**
* @api {put} / Update investment
**/

router.put('/:projectId', async (req, res) => {

    res.send({ ok: true, user: req.userId });

});

/**
* @api {delete} / Delete investment
**/

router.delete('/:projectId', async (req, res) => {
    try {
        const findAndRemoveInvestment = await Project.findByIdAndRemove(req.params.projectId);

        return findAndRemoveInvestment != null ? res.send({ mensagem: 'Deleted Investment with success!' })
            : res.status(400).send({ erro: 'Investment id does not exists' });

    } catch (err) {
        return res.status(400).send({ erro: 'Delete investiment failed' })
    }
});

module.exports = app => app.use('/card-invest', router);