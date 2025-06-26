import { createAsyncThunk } from '@reduxjs/toolkit';
import { getApi, postApi, deleteApi, putApi } from '../../api/fetchApi';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const response = await getApi('/tasks');
    return response.data;
});

export const fetchAddTask = createAsyncThunk('tasks/addTask', async (task) => {
    const response = await postApi('/tasks', task);
    return response.data;
});

export const fetchUpdateTask = createAsyncThunk('tasks/updateTask', async (task) => {
    const response = await putApi('/tasks', task);
    return response.data;
});

export const fetchDeleteTask = createAsyncThunk('tasks/deleteTask', async (task) => {
    const response = await deleteApi('/tasks', task);
    return response.data;
});
