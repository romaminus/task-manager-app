import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalEdit: {
        isOpen: false,
        id: null,
    },
    modalAchievements: {
        isOpen: false,
    },
    modalLeaderboard: {
        isOpen: false,
    },
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModalEdit: (state, action) => {
            state.modalEdit.isOpen = true;
            state.modalEdit.id = action.payload;
        },
        closeModalEdit: (state) => {
            state.modalEdit.isOpen = false;
            state.modalEdit.id = null;
        },
        openModalAchievements: (state) => {
            state.modalAchievements.isOpen = true;
        },
        closeModalAchievements: (state) => {
            state.modalAchievements.isOpen = false;
        },
        openModalLeaderboard: (state) => {
            state.modalLeaderboard.isOpen = true;
        },
        closeModalLeaderboard: (state) => {
            state.modalLeaderboard.isOpen = false;
        },
    }
});


export const { openModalEdit, closeModalEdit, openModalAchievements, closeModalAchievements, openModalLeaderboard, closeModalLeaderboard } = modalSlice.actions;
export default modalSlice.reducer;