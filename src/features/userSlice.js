import { createSlice } from "@reduxjs/toolkit";
import userAvatar from "../assets/avatars/userAv.jpg";

const initialState = {
  currentUser: {
    id: 1,
    name: "No Brain",
    image: userAvatar,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
});

export const selectUser = (state) => state.user.currentUser;

export default userSlice.reducer;
