import { createSlice } from "@reduxjs/toolkit";

// Сторисы
import story1 from "../assets/stories/story1.jpg";
import story2 from "../assets/stories/story2.jpg";
import story3 from "../assets/stories/story3.jpg";
import story4 from "../assets/stories/story4.jpeg";

// Публикации
import leylaPostImg from "../assets/postImage/leylaPost.jpg";
import janePostImg from "../assets/postImage/janedoePost.jpg";

// Аватарки
import leyla from "../assets/avatars/leylaAv.jpeg";
import janeAv from "../assets/avatars/janedoeAv.jpg";
import dustin from "../assets/avatars/dustinAv.jpg";
import malcolm from "../assets/avatars/malkolmAv.jpg";
import selma from "../assets/avatars/selmaAv.jpeg";
import john from "../assets/avatars/jonhdoeAv.jpg";
import jane from "../assets/avatars/janedoeAv.jpg";

const initialState = {
  suggestions: [
    {
      id: 9,
      name: "Selma Driscoll",
      avatar: selma,
    },
    {
      id: 10,
      name: "Malcolm Case",
      avatar: malcolm,
    },
  ],
  actions: [
    {
      id: 2,
      userId: 3,
      name: "John Doe",
      avatar: john,
      action: "изменил обложку профиля",
      time: "1 мин назад",
    },
    {
      id: 3,
      userId: 4,
      name: "Dustin Jules",
      avatar: dustin,
      action: "понравился пост",
      time: "3 мин назад",
    },
    {
      id: 4,
      userId: 1,
      name: "Rylie Leyla",
      avatar: leyla,
      action: "понравился комментарий",
      time: "4 мин назад",
    },
    {
      id: 5,
      userId: 2,
      name: "Jane Doe",
      avatar: jane,
      action: "опубликовала пост",
      time: "6 мин назад",
    },
  ],
  stories: [
    {
      id: 1,
      name: "Chelsey Sidney",
      img: story1,
    },
    {
      id: 2,
      name: "John Doe",
      img: story2,
    },
    {
      id: 3,
      name: "Dustin Jules",
      img: story3,
    },
    {
      id: 4,
      name: "Rylie Leyla",
      img: story4,
    },
  ],
  posts: [
    {
      id: 1,
      name: "Rylie Leyla",
      userId: 1,
      time: "5 мин назад",
      img: leylaPostImg,
      avatar: leyla,
      desc: "На этой планете все вечно болтают об удаче, судьбе и предназначении, а вот я во всё это не верю. Я верю, что с самого твоего рождения жизнь пытается тебя убить, и единственный достойный ответ — каждый миг сражаться с ней.",
    },
    {
      id: 2,
      name: "Jane Doe",
      userId: 2,
      time: "9 мин назад",
      img: janePostImg,
      avatar: janeAv,
      desc: "Часто именно наши завышенные ожидания или отсутствие цели, являются основными причинами недовольства жизнью.",
    },
  ],
};

export const userDataSlice = createSlice({
  name: "data",
  initialState,
});

export const selectStory = state => state.data.stories;
export const selectPost = state => state.data.posts;

export const selectSuggtstions = state => state.data.suggestions;
export const selectActions = state => state.data.actions;

export default userDataSlice.reducer;
