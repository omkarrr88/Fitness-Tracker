// src/controllers/workoutController.js
const Workout = require('../models/workout');

exports.logWorkout = async (req, res) => {
    const { date, exerciseType, time, reps, sets, weight, totalCalories } = req.body;
    const userId = req.user.userId; // Ensure userId is taken from authenticated user

    try {
        const workout = new Workout({ userId, date, exerciseType, time, reps, sets, weight, totalCalories });
        await workout.save();
        res.status(201).json({ success: true, message: 'Workout logged successfully' });
    } catch (error) {
        console.error('Error logging workout:', error);
        res.status(500).json({ success: false, message: 'Error logging workout' });
    }
};

// Ensure the getWorkouts function returns totalCalories as well
exports.getWorkouts = async (req, res) => {
    const userId = req.user.userId; // Ensure userId is taken from authenticated user
    const date = req.query.date; // Get the date from query params

    try {
        const workouts = await Workout.find({ userId, date }).sort({ date: 1 });
        res.json({ success: true, workouts });
    } catch (error) {
        console.error('Error retrieving workouts:', error);
        res.status(500).json({ success: false, message: 'Error retrieving workouts' });
    }
};


exports.deleteWorkout = async (req, res) => {
    const userId = req.user.userId; // Ensure userId is taken from authenticated user
    const workoutId = req.params.id; // Get the workout ID from the request parameters

    try {
        const workout = await Workout.findOneAndDelete({ _id: workoutId, userId });
        if (!workout) {
            return res.status(404).json({ success: false, message: 'Workout not found' });
        }
        res.json({ success: true, message: 'Workout deleted successfully' });
    } catch (error) {
        console.error('Error deleting workout:', error);
        res.status(500).json({ success: false, message: 'Error deleting workout' });
    }
};
