import { configureStore } from "@reduxjs/toolkit";
import { commentsApi } from "./commentsApi";
import user from "../features/userSlice";
import data from "../features/userDataSlice";

export const store = configureStore({
  reducer: {
    [commentsApi.reducerPath]: commentsApi.reducer,
    user,
    data,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(commentsApi.middleware),
});
