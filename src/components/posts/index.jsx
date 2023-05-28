import Post from "../post";
import leyla from "../../assets/avatars/leylaAv.jpeg";
import janeAv from "../../assets/avatars/janedoeAv.jpg";
import leylaPostImg from "../../assets/postImage/leylaPost.jpg";
import janePostImg from "../../assets/postImage/janedoePost.jpg";

import "./posts.scss";

const posts = [
  {
    id: 1,
    name: "Rylie Leyla",
    userId: 1,
    img: leylaPostImg,
    avatar: leyla,
    desc: "На этой планете все вечно болтают об удаче, судьбе и предназначении, а вот я во всё это не верю. Я верю, что с самого твоего рождения жизнь пытается тебя убить, и единственный достойный ответ — каждый миг сражаться с ней.",
  },
  {
    id: 2,
    name: "Jane Doe",
    userId: 2,
    img: janePostImg,
    avatar: janeAv,
    desc: "Часто именно наши завышенные ожидания или отсутствие цели, являются основными причинами недовольства жизнью.",
  },
];

const Posts = () => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
