import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {},
    userToken: "",
    slip: [],
};

const features = createSlice({
    name: "newPier2Pier",
    initialState,
    reducers: {
        user: (state, {payload}) => {
            state.user = payload;
            console.log("User Data:", payload);
        },

        token: (state, {payload}) => {
            state.userToken = payload;
            console.log("User Token:", payload);
        },
        logout: (state) => {
            state.user = {};
            state.userToken = "";
        },
        betSlip: (state, {payload}) => {
            const existindOddsIndex = state.slip.findIndex(
                (item) => item.selectedGame.id === payload.selectedGame.id
            );
            if (existindOddsIndex !== -1) {
                state.slip[existindOddsIndex].oddsPick = payload.oddsPick;
            } else {
                state.slip.push(payload);
            }
        },
        clearSlip: (state) => {
            state.slip = [];
        },
        removeSingle: (state, {payload}) => {
            const updatedSlip = state.slip.filter(
                (item) => item.selectedGame.id !== payload.selectedGame.id
            );
            state.slip = updatedSlip;
        },
    },
});

export const {user, logout, token, betSlip, clearSlip, removeSingle} =
    features.actions;

export default features.reducer;
