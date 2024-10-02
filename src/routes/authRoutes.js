const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authenticate } = require('../middleware/auth'); // Import the authenticate middleware


router.post('/create-account', authController.createAccount);
router.post('/login', authController.login);
router.post('/send-otp', authController.sendOTP);
router.post('/verify-otp', authController.verifyOTP);
router.post('/reset-password', authController.resetPassword);
router.put('/api/user/profile', authenticate, authController.updateProfile); // Ensure this line is correct
router.post('/submit-form', authController.submitForm);
router.post('/check-email', authController.checkEmail);
router.get('/profile', authenticate, authController.getUserProfile); // Use the authenticate middleware
router.get('/protected-route', authenticate, (req, res) => {
    res.json({ success: true, message: 'You have access to this protected route' });
});

module.exports = router;
