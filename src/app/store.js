import { configureStore } from "@reduxjs/toolkit";
import { commentsApi } from "./commentsApi";
import data from "../features/userDataSlice";

export const store = configureStore({
  reducer: {
    [commentsApi.reducerPath]: commentsApi.reducer,
    data,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(commentsApi.middleware),
});
