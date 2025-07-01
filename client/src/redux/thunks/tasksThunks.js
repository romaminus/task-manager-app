import { createAsyncThunk } from '@reduxjs/toolkit';
import { getApi, postApi, deleteApi, putApi } from '../../api/fetchApi';
const baseUrl = 'http://localhost:5000';
// tasks
export const fetchAllTasks = createAsyncThunk('tasks/fetchAllTasks', async () => {
    const response = await getApi(`${baseUrl}/tasks`);
    return response;
});

export const fetchAddTask = createAsyncThunk('tasks/addTask', async (task) => {
    const response = await postApi(`${baseUrl}/tasks`, task);
    return response;
});

export const fetchUpdateTask = createAsyncThunk('tasks/updateTask', async (task) => {
    const response = await putApi(`${baseUrl}/tasks`, task);
    return response;
});

export const fetchDeleteTask = createAsyncThunk('tasks/deleteTask', async (id) => {
    const response = await deleteApi(`${baseUrl}/tasks/${id}`);
    return response;
});

// gamification
export const fetchPoints = createAsyncThunk('gamification/fetchPoints', async () => {
    const response = await getApi(`${baseUrl}/gamification`);
    return response;
});