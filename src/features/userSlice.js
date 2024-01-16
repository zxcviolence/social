import { createSlice } from "@reduxjs/toolkit";
import userAvatar from "../assets/avatars/userAv.jpg";

const initialState = {
  currentUser: {
    id: 1,
    name: "No Brain",
    image: "https://polinka.top/uploads/posts/2023-05/thumbs/1684411954_polinka-top-p-cherno-belie-kartinki-anime-klinok-rasseka-42.jpg",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
});

export const selectUser = (state) => state.user.currentUser;

export default userSlice.reducer;
