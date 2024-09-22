import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {},
});

export const { reducer: globalReducer } = globalSlice;
