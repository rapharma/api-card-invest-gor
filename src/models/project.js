const mongoose = require('../database');

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    tasks: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
    },
    createAt: {
        type: Date,
        defautl: Date,
        default: Date.now,
    },
});

const User = mongoose.model('Project', ProjectSchema);

module.exports = User;