import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
};

const darkModeSlice = createSlice({
  name: "darkmode",
  initialState,
});

export const selectTheme = (state) => state.theme.darkMode;

export default darkModeSlice.reducer;
