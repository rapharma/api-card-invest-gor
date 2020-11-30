const mongoose = require('../database');

const InvestmentSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
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

const Investments = mongoose.model('Investments', InvestmentSchema);

module.exports = Investments;