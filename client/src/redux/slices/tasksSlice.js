import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, fetchAddTask, fetchDeleteTask, fetchUpdateTask } from "../thunks/tasksThunks";

const initialState = {
    data: [],
    status: 'idle',
    error: null,
    tag: ['work', 'personal', 'other'],
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.data.push({
                id: Date.now(),
                title: action.payload,
                completed: false,
                tag: 'choose tag',
            });
        },
        deleteTask: (state, action) => {
            state.data = state.data.filter(task => task.id !== action.payload);
        },
        updateTag: (state, action) => {
            const { id, tag } = action.payload;
            state.data = state.data.map(task =>
                task.id === id ? { ...task, tag } : task
            );
        },
        toggleTask: (state, action) => {
            state.data = state.data.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task);
        },
        editTask: (state, action) => {
            state.data = state.data.map(task => task.id === action.payload.id ? { ...task, title: action.payload.currentText } : task);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = 'succeeded';
            })
            .addCase(fetchAddTask.fulfilled, (state, action) => {
                state.data.push(action.payload);  
                state.status = 'succeeded';
            })
            .addCase(fetchDeleteTask.fulfilled, (state, action) => {
                state.data = state.data.filter(task => task.id !== action.payload);
                state.status = 'succeeded';
            })
            .addCase(fetchUpdateTask.fulfilled, (state, action) => {
                state.data = state.data.map(task => task.id === action.payload.id ? action.payload : task); 
                state.status = 'succeeded';
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { addTask, deleteTask, editTask, updateTag, toggleTask } = tasksSlice.actions;

export default tasksSlice.reducer;