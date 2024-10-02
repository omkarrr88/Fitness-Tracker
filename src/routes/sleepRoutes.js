const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); // Ensure this path is correct
const sleepController = require('../controllers/sleepController'); // Ensure this path is correct

router.post('/sleep', auth.authenticate, sleepController.saveSleepData);
router.get('/sleep', auth.authenticate, sleepController.getSleepData);

module.exports = router;
