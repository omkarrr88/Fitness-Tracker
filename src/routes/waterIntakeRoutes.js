const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const waterIntakeController = require('../controllers/waterIntakeController');

router.post('/water-intake', auth, waterIntakeController.saveWaterIntake);
router.get('/water-intake', auth, waterIntakeController.getWaterIntake);

module.exports = router;
