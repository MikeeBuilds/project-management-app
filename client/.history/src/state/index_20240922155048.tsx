import { createSlice } from "@reduxjs/toolkit";

export interface initialStateTypes {
   isSidebarCollapsed: boolean;
   isDarkMode: boolean;
}

const initialState: initialStateTypes = {
    isSidebarCollapsed: false,
    isDarkMode: false,
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {}
    },
});

export const {} = globalSlice.actions;
export default globalSlice.reducer;