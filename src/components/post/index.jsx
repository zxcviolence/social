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

const Post = () => {
  const [commentOpen, setCommentOpen] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const posts = useSelector(selectPost);

  return (
    <>
      {posts.map((post) => (
        <div className="post">
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
              <MoreHorizIcon />
            </div>
            <div className="content">
              <p>{post.desc}</p>
              <img src={post.img} alt="postPic" />
            </div>
            <div className="info">
              <div className="item" onClick={() => setLiked(!liked)}>
                {liked ? (
                  <FavoriteOutlinedIcon style={{ color: "red" }} />
                ) : (
                  <FavoriteBorderOutlinedIcon />
                )}{" "}
                12 Лайков
              </div>
              <div
                className="item"
                onClick={() => setCommentOpen(!commentOpen)}
              >
                <TextsmsOutlinedIcon />2 Комментария
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
