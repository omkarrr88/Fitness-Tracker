const express = require('express');
const calorieController = require('../controllers/calorieController');
const router = express.Router();

router.post('/track', calorieController.trackCalories);
router.get('/history', calorieController.getCalorieHistory);

module.exports = router;
