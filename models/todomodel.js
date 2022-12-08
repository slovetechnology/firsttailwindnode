const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true},
    status: {type: String, required: true, default: 'false'}
}, {
    timestamps: true,
})

module.exports = mongoose.model('Todo', todoSchema);