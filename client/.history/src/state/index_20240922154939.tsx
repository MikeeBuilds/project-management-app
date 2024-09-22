import { createSlice } from "@reduxjs/toolkit";

export interface initialStateTypes {
   isSidebar
}

const initialState = {};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {},
});

export const {} = globalSlice.actions;
export default globalSlice.reducer;