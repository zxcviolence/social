import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import john from "../../assets/avatars/jonhdoeAv.jpg";
import jane from "../../assets/avatars/janedoeAv.jpg";
import "./comments.scss";

const comments = [
  {
    id: 1,
    desc: "Всё в жизни вредно! Жить тоже вредно, никто не выдерживает — помирают.",
    name: "John Doe",
    userId: 1,
    avatar: john,
  },
  {
    id: 2,
    desc: "Жить в таком душевном состоянии — невыразимая мука! Неужели не найдется никого, кто бы потихоньку задушил меня, пока я сплю?",
    name: "Jane Doe",
    userId: 2,
    avatar: jane,
  },
];

const Comments = () => {
  const currentUser = useSelector(selectUser);

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.image} alt="avatar" />
        <input type="text" placeholder="Напишите свой комментарий" />
        <button>Отправить</button>
      </div>
      {comments.map((comment) => (
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
