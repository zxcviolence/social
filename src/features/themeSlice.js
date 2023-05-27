import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: true,
};

const darkModeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action) {
      state.darkMode = action.payload;
    },
    switchTheme(state) {
      state.darkMode = false;
    },
  },
});

export const { switchTheme } = darkModeSlice.actions;

export default darkModeSlice.reducer;
