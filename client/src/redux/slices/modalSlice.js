import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    id: null,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            const id = action.payload;
            state.isOpen = true;
            state.id = id;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.id = null;
        },
    }
});


export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;