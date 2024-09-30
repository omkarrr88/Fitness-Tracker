const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth'); // Import the auth middleware

router.post('/create-account', authController.createAccount);
router.post('/login', authController.login);
router.post('/send-otp', authController.sendOTP);
router.post('/verify-otp', authController.verifyOTP);
router.post('/reset-password', authController.resetPassword);
router.post('/submit-form', authController.submitForm);
router.post('/check-email', authController.checkEmail);
router.get('/profile', auth, authController.getUserProfile); // Use the auth middleware

module.exports = router;
