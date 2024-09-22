import { createSlice } from "@reduxjs/toolkit";

export interface initialStateTypes {
   isSide
}

const initialState = {};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {},
});

export const {} = globalSlice.actions;
export default globalSlice.reducer;