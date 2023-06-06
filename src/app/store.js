import { configureStore } from "@reduxjs/toolkit";
import user from "../features/userSlice";
import theme from "../features/themeSlice";
import data from "../features/userDataSlice";
import like from "../features/likeSlice";

export const store = configureStore({
  reducer: {
    user,
    theme,
    data,
    like,
  },
});
