const express = require('express');
const router = express.Router();
const { readDataFromDB } = require('../utils/db');
const fs = require('fs').promises;
const { filterDeletedTasks } = require('../utils/helpers');
const path = require('path');
const dbPath = path.join(__dirname, '../data.json');
const { makeFakeLeaderBoards } = require('../utils/helpers');


router.post('/', async (req, res)=>{
    try{
        const data = readDataFromDB();

        const { value } = req.body;
        const task = {
            "id": Date.now(),
            "title": value,
            "completed": false,
            "tag": "choose tag",
        }
        data.tasks.data.push(task);
        await fs.writeFile(dbPath, JSON.stringify(data, null, 2), 'utf8');
        data.tasks.data = filterDeletedTasks(data.tasks.data);
        res.status(201).json(task);
    } catch (error) {
        console.log('error when you add task to db', error);
        res.status(500).json({ error: 'Failed to add task' });
    }
});

router.put('/', async (req, res)=>{
    try{
        const data = readDataFromDB();
        const { id, completed, tag, title } = req.body;
        const task = data.tasks.data.find(task => task.id === id);
        if(!task){
            return res.status(404).json({ error: 'Task not found' });
        }
        if(completed !== undefined){
            task.completed = completed;
        }
        if(tag !== undefined){
            task.tag = tag;
        }
        if(title !== undefined){
            task.title = title;
        }

        const completedTasks = data.tasks.data.filter(task => task.completed).length * 50;
        data.gamification.points = completedTasks;
        data.gamification.leaderboard = makeFakeLeaderBoards(data.gamification.points);

        await fs.writeFile(dbPath, JSON.stringify(data, null, 2), 'utf8');
        data.tasks.data = data.tasks.data.filter(task => !task.deleted);
        res.json({tasks: data.tasks.data, gamification: data.gamification});
    } catch (error) {
        console.log('error when you update task to db', error);
        res.status(500).json({ error: 'Failed to update task' });
    }
});

router.delete('/:id', async (req, res)=>{
    try{
        const data = readDataFromDB();
        const { id } = req.params;
        const task = data.tasks.data.find(task => task.id === +id);
        if(!task){
            return res.status(404).json({ error: 'Task not found' });
        }
        task.deleted = true;
        await fs.writeFile(dbPath, JSON.stringify(data, null, 2), 'utf8');
        res.json(task.id);
    } catch (error) {
        console.log('error when you delete task from db', error);
        res.status(500).json({ error: 'Failed to delete task' });
    }
});

module.exports = router;