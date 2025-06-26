import { combineReducers } from "@reduxjs/toolkit";
import tasksSlice from "./slices/tasksSlice";
import modalSlice from "./slices/modalSlice";

const rootReducer = combineReducers({
    tasks: tasksSlice,
    modal: modalSlice,
});

export default rootReducer;