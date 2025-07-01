import { createSlice } from "@reduxjs/toolkit";
import {  fetchAddTask, fetchDeleteTask, fetchUpdateTask, fetchAllTasks } from "../thunks/tasksThunks";

const initialState = {
    data: [],
    status: 'idle',
    error: null,
    tag: ['work', 'personal', 'other'],
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllTasks.fulfilled, (state, action) => {
                state.data = action.payload.data;
                state.tag = action.payload.tag;
                state.status = 'succeeded';
                state.error = null;
            })
            .addCase(fetchAddTask.fulfilled, (state, action) => {
                state.data.push(action.payload);  
                state.status = 'succeeded';
            })
            .addCase(fetchDeleteTask.fulfilled, (state, action) => {
                state.data = state.data.filter(task => task.id !== +action.payload);
                state.status = 'succeeded';
            })
            .addCase(fetchUpdateTask.fulfilled, (state, action) => {
                state.data = action.payload.tasks;
                state.status = 'succeeded';
            })
            .addCase(fetchAllTasks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchAddTask.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchDeleteTask.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchUpdateTask.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { editTask, clearError } = tasksSlice.actions;

export default tasksSlice.reducer;