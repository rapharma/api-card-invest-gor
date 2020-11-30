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
        const fixedIncomes = await fixedIncomeModel.find();
        return res.send({ fixedIncomes });
    } catch (err) {
        return res.status(400).send({ erro: 'Load fixedIncomes failed' })
    }
});

/**
* @api {get} / List fixed incomes by id
**/

router.get('/investment/:projectId', async (req, res) => {
    try {
        const fixedIncome = await fixedIncomeModel.findById(req.params.projectId);
        return res.send({ fixedIncome });
    } catch (err) {
        return res.status(400).send({ erro: 'Load investiment failed' })
    }
});

/**
* @api {post} / Create fixed income
**/

router.post('/investment', async (req, res) => {
    try {

        const { value, date } = req.body;

        const fixedIncome = await fixedIncomeModel.create({ value, date, user: req.userId });
        
        return res.send({ fixedIncome });
    } catch (err) {
        return res.status(400).send({ erro: 'Create investiment failed' })
    }
});

/**
* @api {put} / Update fixed income
**/

router.put('/investment/:projectId', async (req, res) => {
    try {

        const { value, date} = req.body;

        const fixedIncome = await fixedIncomeModel.findByIdAndUpdate(req.params.projectId, {value,
             date, 
             user: req.userId,
             }, { new: true });

        return res.send({ fixedIncome });
    } catch (err) {
        return res.status(400).send({ erro: 'Create investiment failed' })
    }
});

/**
* @api {delete} / Delete fixed income
**/

router.delete('/investment/:projectId', async (req, res) => {
    try {
        const findAndRemoveFixedIncome = await fixedIncomeModel.findByIdAndRemove(req.params.projectId);

        return findAndRemoveFixedIncome != null ? res.send({ mensagem: 'Deleted Fixed income with success!' })
            : res.status(400).send({ erro: 'Fixed income id does not exists' });

    } catch (err) {
        return res.status(400).send({ erro: 'Delete investiment failed' })
    }
});

module.exports = app => app.use('/card-invest', router);