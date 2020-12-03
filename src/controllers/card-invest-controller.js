const express = require('express');

const router = express.Router();

const authMiddle = require('../middle/auth');

const fixedIncomeModel = require('../models/investment');

router.use(authMiddle);

/**
* @api {get} / List all fixed incomes
**/

router.get('/investment/', async (req, res) => {
    try {
        const investments = await fixedIncomeModel.find();
        return res.send({ investments });
    } catch (err) {
        return res.status(400).send({ error: 'Load fixedIncomes failed' })
    }
});

/**
* @api {get} / List fixed incomes by id
**/

router.get('/investment/:projectId', async (req, res) => {
    try {
        const investment = await fixedIncomeModel.findById(req.params.projectId);
        return res.send({ investment });
    } catch (err) {
        return res.status(400).send({ error: 'Load investiment failed' })
    }
});

/**
* @api {post} / Create fixed income
**/

router.post('/investment', async (req, res) => {
    try {

        const { type, value, date } = req.body;

        const investment = await fixedIncomeModel.create({ type, value, date, user: req.userId });
        
        return res.send({ investment });
    } catch (err) {
        return res.status(400).send({ error: 'Create investiment failed' })
    }
});

/**
* @api {put} / Update fixed income
**/

router.put('/investment/:projectId', async (req, res) => {
    try {

        const { type, value, date} = req.body;

        const investment = await fixedIncomeModel.findByIdAndUpdate(req.params.projectId, { 
             type,
             value,
             date, 
             user: req.userId,
             }, { new: true });

        return res.send({ investment });
    } catch (err) {
        return res.status(400).send({ error: 'Create investiment failed' })
    }
});

/**
* @api {delete} / Delete fixed income
**/

router.delete('/investment/:projectId', async (req, res) => {
    try {
        const findAndRemoveFixedIncome = await fixedIncomeModel.findByIdAndRemove(req.params.projectId);

        return findAndRemoveFixedIncome != null ? res.send({ mensagem: 'Deleted Fixed income with success!' })
            : res.status(400).send({ error: 'Fixed income id does not exists' });

    } catch (err) {
        return res.status(400).send({ error: 'Delete investiment failed' })
    }
});

module.exports = app => app.use('/card-invest', router);