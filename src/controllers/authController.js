const User = require('../models/User');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

exports.createAccount = async (req, res) => {
    try {
        const { name, gender, dob, email, phone, password } = req.body;
        
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Email already exists' });
        }
        
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Create new user
        const newUser = new User({ name, gender, dob, email, phone, password: hashedPassword });
        await newUser.save();
        
        res.status(201).json({ success: true, message: 'Account created successfully' });
    } catch (error) {
        console.error('Error creating account:', error);
        res.status(500).json({ success: false, message: 'Error creating account' });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }
        
        // Check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }
        
        res.status(200).json({ success: true, message: 'Login successful' });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ success: false, message: 'Error logging in' });
    }
};

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'devilomkar88@gmail.com',
        pass: 'kcpv hhvr idkx nwxh'
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
        from: 'devilomkar88@gmail.com',
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
