const express = require('express');
const router = express.Router();
const { makeFakeLeaderBoards } = require('../utils/helpers');
const { readDataFromDB } = require('../utils/db');
const fs = require('fs').promises;
const path = require('path');
const dbPath = path.join(__dirname, '../data.json');

router.get('/', async (req, res) => {
    try {
        const data = readDataFromDB();

        const completedTasks = data.tasks.data.filter(task => task.completed).length * 50;
        data.gamification.points = completedTasks;
        data.gamification.leaderboard = makeFakeLeaderBoards(data.gamification.points);

        res.json(data.gamification);

    } catch (error) {
        console.error('Error loading gamification data:', error);
        res.status(500).json({ error: 'Failed to fetch gamification data' });
    }
});

module.exports = router;