const WaterIntake = require('../models/WaterIntake');

exports.saveWaterIntake = async (req, res) => {
    const { amount } = req.body;
    const userId = req.user.userId; // Ensure userId is taken from authenticated user
    const date = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format

    try {
        let waterIntake = await WaterIntake.findOne({ userId, date });
        if (waterIntake) {
            waterIntake.amount += amount;
        } else {
            waterIntake = new WaterIntake({ userId, date, amount });
        }
        await waterIntake.save();
        res.json({ success: true, waterIntake });
    } catch (error) {
        console.error('Error saving water intake:', error);
        res.status(500).json({ success: false, message: 'Error saving water intake' });
    }
};

exports.getWaterIntake = async (req, res) => {
    const userId = req.user.userId; // Ensure userId is taken from authenticated user
    try {
        const waterIntakes = await WaterIntake.find({ userId }).sort({ date: 1 });
        const dates = waterIntakes.map(wi => wi.date);
        const amounts = waterIntakes.map(wi => wi.amount);
        res.json({ dates, amounts });
    } catch (error) {
        console.error('Error retrieving water intake data:', error);
        res.status(500).json({ success: false, message: 'Error retrieving water intake data' });
    }
};
