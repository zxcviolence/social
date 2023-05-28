import React from "react";
import { AuthContext } from "../../context/authContext";
import "./comments.scss";

const comments = [
  {
    id: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
    name: "John Doe",
    userId: 1,
    avatar: "https://android-obzor.com/wp-content/uploads/2022/03/1-104.jpg",
  },
  {
    id: 2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
    name: "Jane Doe",
    userId: 2,
    avatar:
      "https://otkrit-ka.ru/uploads/posts/2022-02/foto-i-krasivye-kartinki-na-avu-v-kontakte-2.jpg",
  },
];

const Comments = () => {
  const { currentUser } = React.useContext(AuthContext);

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.image} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment" key={comment.id}>
          <img src={comment.avatar} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
