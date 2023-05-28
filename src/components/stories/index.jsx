import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import story1 from "../../assets/stories/story1.jpg";
import story2 from "../../assets/stories/story2.jpg";
import story3 from "../../assets/stories/story3.jpg";
import story4 from "../../assets/stories/story4.jpeg";
import "./stories.scss";

const stories = [
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
];

const Stories = () => {
  const currentUser = useSelector(selectUser);

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.image} alt="avatar" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="storyPic" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
