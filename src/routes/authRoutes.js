const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/create-account', authController.createAccount);
router.post('/login', authController.login);
router.post('/send-otp', authController.sendOTP);
router.post('/verify-otp', authController.verifyOTP);
router.post('/reset-password', authController.resetPassword);
router.post('/submit-form', authController.submitForm);
router.post('/check-email', authController.checkEmail);

module.exports = router;