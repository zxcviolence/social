import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const darkModeSlice = createSlice({
  name: "darkmode",
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { switchTheme } = darkModeSlice.actions;

export const selectTheme = (state) => state.theme.darkMode;

export default darkModeSlice.reducer;
