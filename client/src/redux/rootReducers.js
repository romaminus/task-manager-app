import { combineReducers } from "@reduxjs/toolkit";
import tasksSlice from "./slices/tasksSlice";
import modalSlice from "./slices/modalSlice";
import pomodoroTimerSlice from "./slices/pomodoroTimerSlice";

const rootReducer = combineReducers({
    tasks: tasksSlice,
    modal: modalSlice,
    pomodoroTimer: pomodoroTimerSlice,
});

export default rootReducer;