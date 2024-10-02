const mongoose = require('mongoose');

const sleepSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    sleepDate: { type: String, required: true },
    sleepTime: { type: String, required: true },
    wakeTime: { type: String, required: true },
    sleepDuration: { type: Number, required: true }
});

module.exports = mongoose.model('Sleep', sleepSchema);
