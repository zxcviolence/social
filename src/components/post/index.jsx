import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPost } from "../../features/userDataSlice";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Comments from "../comments";
import "./post.scss";
import { useGetCommentsQuery } from "../../app/commentsApi";

const Post = () => {
  const [commentOpen, setCommentOpen] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const [count, setCount] = React.useState(12);
  const { data = [] } = useGetCommentsQuery();
  const posts = useSelector(selectPost);

  const like = () => {
    setLiked(!liked);
    setCount(!liked ? count + 1 : count - 1);
  };

  return (
    <>
      {posts.map(post => (
        <div key={post.id} className="post">
          <div className="container">
            <div className="user">
              <div className="userInfo">
                <img src={post.avatar} alt="avatar" />
                <div className="details">
                  <Link
                    to={`/profile/${post.userId}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <span className="name">{post.name}</span>
                  </Link>
                  <span className="date">{post.time}</span>
                </div>
              </div>
              <MoreHorizIcon style={{ cursor: "pointer" }} />
            </div>
            <div className="content">
              <p>{post.desc}</p>
              <img src={post.img} alt="postPic" />
            </div>
            <div className="info">
              <div className="item" onClick={() => like()}>
                {liked ? (
                  <FavoriteOutlinedIcon style={{ color: "red" }} />
                ) : (
                  <FavoriteBorderOutlinedIcon />
                )}{" "}
                {count}
              </div>
              <div
                className="item"
                onClick={() => setCommentOpen(!commentOpen)}
              >
                <TextsmsOutlinedIcon />{data.length} Комментария
              </div>
              <div className="item">
                <ShareOutlinedIcon /> Поделиться
              </div>
            </div>
            {commentOpen && <Comments />}
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;
