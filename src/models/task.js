const mongoose = require('../database');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true,
    },
    assignTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    completed: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createAt: {
        type: Date,
        defautl: Date,
        default: Date.now,
    },
});

const User = mongoose.model('Task', TaskSchema);

module.exports = User;