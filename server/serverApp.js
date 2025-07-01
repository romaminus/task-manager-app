const express = require('express');
const cors = require('cors');
const tasksRoutes = require('./routes/tasks');
const gamificationRoutes = require('./routes/gamification');
const { readDataFromDB } = require('./utils/db');
const { filterDeletedTasks } = require('./utils/helpers');
const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/tasks', tasksRoutes);
app.use('/gamification', gamificationRoutes);

app.get('/tasks', (req, res)=>{
    try{
        const data = readDataFromDB();
        data.tasks.data = filterDeletedTasks(data.tasks.data);
        res.json(data.tasks);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(port, ()=>{
    console.log('Express server runing...');
});
