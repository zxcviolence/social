import { configureStore } from "@reduxjs/toolkit";
import user from "../features/userSlice";
import theme from "../features/themeSlice";

export const store = configureStore({
  reducer: {
    user,
    theme,
  },
});
