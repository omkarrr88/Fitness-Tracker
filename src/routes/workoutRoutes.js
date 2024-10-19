const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workoutController');
const authMiddleware = require('../middleware/auth'); // Ensure this line is added

router.post('/workout', authMiddleware.authenticate, workoutController.logWorkout);
router.get('/workout', authMiddleware.authenticate, workoutController.getWorkouts);
router.delete('/workout/:id', authMiddleware.authenticate, workoutController.deleteWorkout);

module.exports = router;
