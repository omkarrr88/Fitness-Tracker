const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: Date, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    heightCm: { type: Number },
    weight: { type: Number, required: true },
    fitnessGoal: { type: String, required: true },
    goalTime: { type: String, required: true },
    dietType: { type: String, required: true },
    mealsPerDay: { type: String, required: true },
    waterIntake: { type: Number, required: true },
    activityLevel: { type: String, required: true },
    regularActivity: { type: String, required: true },
    workoutType: { type: String, required: true },
    workoutFrequency: { type: String, required: true },
    sleepHours: { type: String, required: true },
    sleepTime: { type: String, required: true },
    sleepTrouble: { type: String, required: true },
    healthCondition: { type: [String], required: true },
    dailySteps: { type: String, required: true },
    breakfastTime: { type: String, required: true },
    lunchTime: { type: String, required: true },
    dinnerTime: { type: String, required: true },
    overallWellness: { type: String, required: true },
    dailyFeeling: { type: String, required: true },
    otp: { type: String } // Added OTP field
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
