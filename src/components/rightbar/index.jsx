import React from "react";
import { useSelector } from "react-redux";
import { selectActions, selectSuggtstions } from "../../features/userDataSlice";
import { useGetFriendsQuery } from "../../app/friendsApi";
import { Link } from "react-router-dom";
import "./rightbar.scss";

const Rightbar = () => {
  const suggestions = useSelector(selectSuggtstions);
  const actions = useSelector(selectActions);
  const { data = [] } = useGetFriendsQuery();

  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Рекомендовано для вас</span>
          {suggestions.map(item => (
            <div key={item.id}>
              <div className="user">
                <div className="userInfo">
                  <img src={item.avatar} alt="avatar" />
                  <span>{item.name}</span>
                </div>
                <div className="buttons">
                  <button>подписаться</button>
                  <button>отклонить</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="item">
          <span>Последние действия</span>
          {actions.map(item => (
            <div key={item.id} className="user">
              <Link
                to={`/profile/${item.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="userInfo">
                  <img src={item.avatar} alt="avatar" />
                  <p>
                    <span>{item.name}</span> {item.action}
                  </p>
                </div>
              </Link>
              <span>{item.time}</span>
            </div>
          ))}
        </div>
        <div className="item">
          <span>Друзья в сети</span>
          {data.map(item => (
            <div key={item.id} className="user">
              <div className="userInfo">
                <img src={item.avatar} alt="avatar" />
                <div className="online" />
                <span>{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
