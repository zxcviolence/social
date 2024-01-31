import { configureStore } from "@reduxjs/toolkit";
import { commentsApi } from "./commentsApi";
import { friendsApi } from "./friendsApi";
import data from "../features/userDataSlice";

export const store = configureStore({
  reducer: {
    [commentsApi.reducerPath]: commentsApi.reducer,
    [friendsApi.reducerPath]: friendsApi.reducer,
    data,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(friendsApi.middleware, commentsApi.middleware),
});
