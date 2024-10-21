const User = require('../models/Calorie');

exports.trackCalories = async (req, res) => {
    const { userId, date, time, totalCalories, totalCarbs, totalFats, totalProteins, selectedFoods } = req.body;
    const user = await User.findById(userId);
    if (user) {
        user.calories.push({ date, time, totalCalories, totalCarbs, totalFats, totalProteins, selectedFoods });
        await user.save();
        res.status(200).json({ message: 'Calories tracked successfully' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

exports.getCalorieHistory = async (req, res) => {
    const { userId } = req.query;
    const user = await User.findById(userId);
    if (user) {
        res.status(200).json(user.calories);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

exports.deleteCalorieEntry = async (req, res) => {
    const { userId, entryId } = req.params;
    const user = await User.findById(userId);
    if (user) {
        user.calories.id(entryId).remove();
        await user.save();
        res.status(200).json({ message: 'Entry deleted successfully' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

exports.getWeeklyInsights = async (req, res) => {
    const { userId } = req.query;
    const user = await User.findById(userId);
    if (user) {
        const lastWeekData = user.calories.filter(entry => {
            const entryDate = new Date(entry.date);
            const today = new Date();
            const oneWeekAgo = new Date(today.setDate(today.getDate() - 7));
            return entryDate >= oneWeekAgo;
        });

        const totalCalories = lastWeekData.reduce((sum, entry) => sum + entry.totalCalories, 0);
        const insights = `Total Calories in the last week: ${totalCalories}`;
        res.status(200).json({ insights });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};
