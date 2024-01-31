import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const friendsApi = createApi({
  reducerPath: "friendsApi",
  tagTypes: ["friends"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: builder => ({
    getFriends: builder.query({
      query: () => "friends",
    }),
  }),
});

export const { useGetFriendsQuery } = friendsApi;
