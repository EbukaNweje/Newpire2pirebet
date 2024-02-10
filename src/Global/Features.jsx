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
            const existingOddsIndex = state.slip.findIndex(
                (item) => item.bettor === payload.bettor
            );
            if (existingOddsIndex !== -1) {
                state.slip[existingOddsIndex].oddsSelected =
                    payload.oddsSelected;
            } else {
                state.slip.push(payload);
                console.log(payload);
            }
        },
        clearSlip: (state) => {
            state.slip = [];
        },
        removeSingle: (state, {payload}) => {
            const updatedSlip = state.slip.filter(
                (item) => item.bettor !== payload.bettor
            );
            state.slip = updatedSlip;
        },
    },
});

export const {user, logout, token, betSlip, clearSlip, removeSingle} =
    features.actions;

export default features.reducer;
