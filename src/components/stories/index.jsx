import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { selectStory } from "../../features/userDataSlice";
import "./stories.scss";

const Stories = () => {
  const currentUser = useSelector(selectUser);
  const stories = useSelector(selectStory);

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
