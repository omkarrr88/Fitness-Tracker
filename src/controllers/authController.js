const User = require('../models/User');
const jwt = require('jsonwebtoken');
const WaterIntake = require('../models/WaterIntake'); // Assuming you have a WaterIntake model
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

exports.createAccount = async (req, res) => {
    const {
        name, gender, dob, email, phone, password, confirmPassword, age, heightCm, weight,
        fitnessGoal, goalTime, dietType, mealsPerDay, waterIntake, activityLevel, regularActivity,
        workoutType, workoutFrequency, sleepHours, sleepTime, sleepTrouble, healthCondition,
        dailySteps, breakfastTime, lunchTime, dinnerTime, overallWellness, dailyFeeling
    } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
        return res.status(400).json({ success: false, message: 'Passwords do not match' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ success: false, message: 'Email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
        name, gender, dob, email, phone, password: hashedPassword, age, heightCm, weight,
        fitnessGoal, goalTime, dietType, mealsPerDay, waterIntake, activityLevel, regularActivity,
        workoutType, workoutFrequency, sleepHours, sleepTime, sleepTrouble, healthCondition,
        dailySteps, breakfastTime, lunchTime, dinnerTime, overallWellness, dailyFeeling
    });

    try {
        await newUser.save();
        res.status(201).json({ success: true, message: 'Account created successfully' });
    } catch (error) {
        console.error('Error creating account:', error);
        res.status(500).json({ success: false, message: 'Error creating account' });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Invalid email or password' });
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ success: true, token });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.submitForm = async (req, res) => {
    try {
        const { email, ...formData } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, message: 'Email not found' });
        }

        // Save form data linked to the user
        const newFormData = new FormData({ email, ...formData });
        await newFormData.save();

        res.status(201).json({ success: true, message: 'Form submitted successfully' });
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ success: false, message: 'Error submitting form' });
    }
};

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

exports.sendOTP = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        return res.json({ success: false, message: 'Email not found' });
    }

    const otp = crypto.randomInt(100000, 999999).toString();
    user.otp = otp;
    await user.save();
    
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your OTP Code',
        text: `Dear User,

To complete your authentication process, please use the following One-Time Password (OTP). This code is valid for 10 minutes.

Your OTP: ${otp}

For your security, do not share this OTP with anyone. If you did not request this, please ignore this email.

Thank you for using our services.

Best regards,
PluseFit`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.json({ success: false, message: 'Error sending email' });
        }
        res.json({ success: true, message: 'OTP sent' });
    });
};

exports.verifyOTP = async (req, res) => {
    const { email, otp } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.otp !== otp) {
        return res.json({ success: false, message: 'Invalid OTP' });
    }

    user.otp = null;
    await user.save();

    res.json({ success: true, message: 'OTP verified' });
};

exports.resetPassword = async (req, res) => {
    try {
        console.log('Reset password API called'); // Debugging log
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            console.log('User not found'); // Debugging log
            return res.json({ success: false, message: 'Email not found' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        await user.save();

        console.log('Password reset successful'); // Debugging log
        res.json({ success: true, message: 'Password reset successful' });
    } catch (error) {
        console.error('Error resetting password:', error);
        res.status(500).json({ success: false, message: 'Error resetting password' });
    }
};

exports.checkEmail = async (req, res) => {
    try {
        const { email } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Email already exists' });
        }
        res.status(200).json({ success: true, message: 'Email is available' });
    } catch (error) {
        console.error('Error checking email:', error);
        res.status(500).json({ success: false, message: 'Error checking email' });
    }
};
