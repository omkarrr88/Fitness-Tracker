const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    exerciseType: { type: String, required: true },
    time: { type: Number },
    reps: { type: Number },
    sets: { type: Number },
    weight: { type: Number },
    totalCalories: { type: Number } // New field for total calories burned
});

module.exports = mongoose.model('Workout', workoutSchema);
