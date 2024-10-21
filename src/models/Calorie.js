// models/CalorieEntry.js

const mongoose = require('mongoose');

const calorieEntrySchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    totalCalories: {
        type: Number,
        required: true
    },
    totalCarbs: {
        type: Number,
        required: true
    },
    totalFats: {
        type: Number,
        required: true
    },
    totalProteins: {
        type: Number,
        required: true
    },
    selectedFoods: {
        type: [String],
        required: true
    }
});

module.exports = mongoose.model('CalorieEntry', calorieEntrySchema);
