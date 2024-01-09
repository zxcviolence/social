import { configureStore } from "@reduxjs/toolkit";
import user from "../features/userSlice";
import data from "../features/userDataSlice";

export const store = configureStore({
  reducer: {
    user,
    data,
  },
});
