const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); // Ensure this path is correct
const waterIntakeController = require('../controllers/waterIntakeController'); // Ensure this path is correct

// Ensure the controller methods are correctly defined and imported
router.post('/water-intake', auth.authenticate, waterIntakeController.saveWaterIntake);
router.get('/water-intake', auth.authenticate, waterIntakeController.getWaterIntake);

module.exports = router;
