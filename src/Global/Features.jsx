import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {},
    userToken: "",
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
    },
});

export const {user, logout, token} = features.actions;

export default features.reducer;
