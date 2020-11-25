const mongoose = require('../database');

const FixedIncomeSchema = new mongoose.Schema({
    value: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        defautl: Date,
        default: Date.now,
    },
});

const FixedIncome = mongoose.model('Fixed-incomes', FixedIncomeSchema);

module.exports = FixedIncome;