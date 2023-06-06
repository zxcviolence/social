import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  liked: false,
};

const likedSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {},
});

export default likedSlice.reducer;
