import React from "react";
import { AuthContext } from "../../context/authContext";
import { useSelector } from "react-redux";
import { selectStory } from "../../features/userDataSlice";
import "./stories.scss";

const Stories = () => {
  const { currentUser } = React.useContext(AuthContext);
  const stories = useSelector(selectStory);

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.image} alt="avatar" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map(story => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="storyPic" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
