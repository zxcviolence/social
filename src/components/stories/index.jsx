import React from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss";

const stories = [
  {
    id: 1,
    name: "Chelsey Sidney",
    img: "https://phonoteka.org/uploads/posts/2021-07/1625488849_27-phonoteka-org-p-zastavka-dlya-instagrama-krasivie-zastavki-29.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    img: "https://drasler.ru/wp-content/uploads/2018/08/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D0%B4%D0%BB%D1%8F-%D0%98%D0%BD%D1%81%D1%82%D0%B0%D0%B3%D1%80%D0%B0%D0%BC%D0%B0-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BF%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D1%8B%D0%B5-2.jpg",
  },
  {
    id: 3,
    name: "Dustin Jules",
    img: "https://165dc6ae-1b27-4856-8ca7-b1edf208847c.selcdn.net/images/original/materials/sections/150115/150115.jpg?1678464337",
  },
  {
    id: 4,
    name: "Rylie Leyla",
    img: "https://hipolink.net/ru/articleFiles/df6833de-d60d-4140-bf6e-3c23e836765d",
  },
];

const Stories = () => {
  const { currentUser } = React.useContext(AuthContext);

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.image} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
