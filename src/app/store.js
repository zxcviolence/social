import { configureStore } from "@reduxjs/toolkit";
import darkTheme from "../features/themeSlice";

export const store = configureStore({
  reducer: {
    darkTheme,
  },
});
