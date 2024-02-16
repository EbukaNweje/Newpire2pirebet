import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {},
    userToken: "",
    slip: [],
    isLoggedIn: false,
};

const features = createSlice({
    name: "newPier2Pier",
    initialState,
    reducers: {
        userData: (state, {payload}) => {
            state.user = payload;
            console.log("User Data:", payload);
        },
        isLoggedInUser: (state, {payload}) => {
            state.isLoggedIn = payload;
            // console.log("Is Logged In?", payload);
        },
        loginToken: (state, {payload}) => {
            state.userToken = payload;
            console.log("User Token:", payload);
        },
        logout: (state) => {
            state.user = {};
            state.userToken = "";
            state.isLoggedIn = false
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

export const {userData,isLoggedInUser, logout, loginToken, betSlip, clearSlip, removeSingle} =
    features.actions;

export default features.reducer;
