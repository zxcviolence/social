import React from "react";
import { AuthContext } from "../../context/authContext";
import {
  useAddCommentMutation,
  useGetCommentsQuery,
} from "../../app/commentsApi";
import "./comments.scss";

const Comments = () => {
  const { currentUser } = React.useContext(AuthContext);

  const [count, setCount] = React.useState("");
  const [newComment, setNewComment] = React.useState("");

  const { data = [], isLoading } = useGetCommentsQuery(count);
  const [addComment] = useAddCommentMutation();

  const handleAddNewComment = async () => {
    if (newComment) {
      await addComment({
        comment: newComment,
        name: currentUser.name,
        avatar: currentUser.image,
      }).unwrap();
    }
    setNewComment("");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="comments">
      {/* <div>
        <select value={count} onChange={e => setCount(e.target.value)}>
        <option value="">all</option>
        <option value="5">5</option>
        <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div> */}

      {data.map(comment => (
        <div className="comment" key={comment.id}>
          <img src={comment.avatar} alt="avatar" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.comment}</p>
          </div>
          <span className="date">1 час назад</span>
        </div>
      ))}
      <div className="write">
        <img src={currentUser.image} alt="avatar" />
        <input
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
          type="text"
          placeholder="Напишите свой комментарий"
        />
        <button onClick={handleAddNewComment}>Отправить</button>
      </div>
    </div>
  );
};

export default Comments;
