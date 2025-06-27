import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isRunning: false,
    isPaused: false,
    startTime: null,     // timestamp коли запустили
    timeLeft: 25 * 60,   // залишок у секундах
    pomodoroCount: 0,    // завершені помодоро
    breakType: null,     // 'short', 'long' або null (робоча сесія)
};

const pomodoroSlice = createSlice({
    name: "pomodoro",
    initialState,
    reducers: {
        startTimer: (state) => {
            state.isRunning = true;
            state.isPaused = false;
            state.startTime = Date.now();
        },
        pauseTimer: (state) => {
            state.isPaused = true;
            state.isRunning = false;
        },
        resumeTimer: (state) => {
            state.isPaused = false;
            state.isRunning = true;
            state.startTime = Date.now();
        },
        stopTimer: (state) => {
            state.isRunning = false;
            state.isPaused = false;
            state.startTime = null;
            state.timeLeft = 25 * 60;
            state.breakType = null;
        },
        setTimeLeft: (state, action) => {
            state.timeLeft = action.payload;
        },
        completePomodoro: (state) => {
            state.pomodoroCount += 1;
            state.isRunning = false;
            state.startTime = null;
            state.timeLeft = 25 * 60;
            state.breakType = null;
        },
        startBreak: (state, action) => {
            state.breakType = action.payload; // 'short' або 'long'
            state.timeLeft = action.payload === 'long' ? 15 * 60 : 5 * 60;
            state.isRunning = true;
            state.isPaused = false;
            state.startTime = Date.now();
        }
    }
});

export const {
    startTimer,
    pauseTimer,
    resumeTimer,
    stopTimer,
    setTimeLeft,
    completePomodoro,
    startBreak
} = pomodoroSlice.actions;

export default pomodoroSlice.reducer;