import { combineReducers } from "@reduxjs/toolkit";
import tasksSlice from "./slices/tasksSlice";
import modalSlice from "./slices/modalSlice";
import pomodoroTimerSlice from "./slices/pomodoroTimerSlice";
import gamificationSlice from "./slices/gamificationSlice";

const rootReducer = combineReducers({
    tasks: tasksSlice,
    modal: modalSlice,
    pomodoroTimer: pomodoroTimerSlice,
    gamification: gamificationSlice,
});

export default rootReducer;