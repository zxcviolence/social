import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  tagTypes: ["comments"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: builder => ({
    getComments: builder.query({
      query: (limit = "") => `comments?${limit && `_limit=${limit}`}`,
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "comments", id })),
              { type: "comments", id: "LIST" },
            ]
          : [{ type: "comments", id: "LIST" }],
    }),
    addComment: builder.mutation({
      query: body => ({
        url: "comments",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "comments", id: "LIST" }],
    }),
  }),
});

export const { useGetCommentsQuery, useAddCommentMutation } = commentsApi;
