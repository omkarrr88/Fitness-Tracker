const Sleep = require('../models/Sleep');

exports.saveSleepData = async (req, res) => {
    const { sleepDate, sleepTime, wakeTime, sleepDuration } = req.body;
    const userId = req.user.userId; // Ensure userId is taken from authenticated user

    try {
        const sleepData = new Sleep({ userId, sleepDate, sleepTime, wakeTime, sleepDuration });
        await sleepData.save();
        res.status(201).json({ success: true, message: 'Sleep data saved successfully' });
    } catch (error) {
        console.error('Error saving sleep data:', error);
        res.status(500).json({ success: false, message: 'Error saving sleep data' });
    }
};

exports.getSleepData = async (req, res) => {
    const userId = req.user.userId; // Ensure userId is taken from authenticated user
    const days = parseInt(req.query.days, 10); // Get the number of days from query params
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - days);

    try {
        const sleepData = await Sleep.find({
            userId,
            sleepDate: { $gte: startDate.toISOString().split('T')[0], $lte: endDate.toISOString().split('T')[0] }
        }).sort({ sleepDate: 1 });

        const dates = sleepData.map(sd => sd.sleepDate);
        const durations = sleepData.map(sd => sd.sleepDuration);
        res.json({ dates, durations });
    } catch (error) {
        console.error('Error retrieving sleep data:', error);
        res.status(500).json({ success: false, message: 'Error retrieving sleep data' });
    }
};
