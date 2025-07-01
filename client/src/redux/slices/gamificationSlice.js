import { createSlice } from "@reduxjs/toolkit";
import { fetchPoints, fetchUpdateTask } from "../thunks/tasksThunks";

const initialState = {
    points: 0,
    achievements: [],
    leaderboard: [],
};

const gamificationSlice = createSlice({
    name: 'gamification',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPoints.fulfilled, (state, action) => {
                state.points = action.payload.points;
                state.achievements = action.payload.achievements;
                state.leaderboard = action.payload.leaderboard;
            })
            .addCase(fetchPoints.rejected, (state, action) => {
                console.error('Failed to fetch points:', action.error);
            })
            .addCase(fetchUpdateTask.fulfilled, (state, action)=>{
                state.points = action.payload.gamification.points;
                state.achievements = action.payload.gamification.achievements;
                state.leaderboard = action.payload.gamification.leaderboard;
            })
            .addCase(fetchUpdateTask.rejected, (state, action) => {
                console.error('Failed to fetch points:', action.error);
            })
    }
});

export default gamificationSlice.reducer;
