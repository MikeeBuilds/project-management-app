import { createSlice } from "@reduxjs/toolkit";

export interface initialStateTypes {
   isSidebarCollapsed: boolean;
   isDarkMode: boolean;
}

const initialState = {};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {},
});

export const {} = globalSlice.actions;
export default globalSlice.reducer;