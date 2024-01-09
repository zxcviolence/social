import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { selectComment } from "../../features/userDataSlice";
import "./comments.scss";

const Comments = () => {
  const currentUser = useSelector(selectUser);
  const comments = useSelector(selectComment);
  const [text, setText] = React.useState("");

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.image} alt="avatar" />
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          type="text"
          placeholder="Напишите свой комментарий"
        />
        <button>Отправить</button>
      </div>
      {comments.map(comment => (
        <div className="comment" key={comment.id}>
          <img src={comment.avatar} alt="avatar" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 час назад</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
