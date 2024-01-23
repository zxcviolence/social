import React from "react";
import { AuthContext } from "../../context/authContext";
import Friends from "../../assets/icons/1.png";
import Groups from "../../assets/icons/2.png";
import Market from "../../assets/icons/3.png";
import Watch from "../../assets/icons/4.png";
import Memories from "../../assets/icons/5.png";
import Events from "../../assets/icons/6.png";
import Gaming from "../../assets/icons/7.png";
import Gallery from "../../assets/icons/8.png";
import Videos from "../../assets/icons/9.png";
import Messages from "../../assets/icons/10.png";
import Tutorials from "../../assets/icons/11.png";
import Courses from "../../assets/icons/12.png";
import Fund from "../../assets/icons/13.png";
import "./leftbar.scss";

const Leftbar = () => {
  const { currentUser } = React.useContext(AuthContext);

  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.image} alt="avatar" />
            <span>{currentUser.name}</span>
          </div>
          <div className="items">
            <img src={Friends} alt="icon" />
            <span>Друзья</span>
          </div>
          <div className="items">
            <img src={Groups} alt="icon" />
            <span>Группы</span>
          </div>
          <div className="items">
            <img src={Market} alt="icon" />
            <span>Магазин</span>
          </div>
          <div className="items">
            <img src={Watch} alt="icon" />
            <span>Просмотр</span>
          </div>
          <div className="items">
            <img src={Memories} alt="icon" />
            <span>Воспоминания</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Развлечения</span>
          <div className="items">
            <img src={Events} alt="icon" />
            <span>События</span>
          </div>
          <div className="items">
            <img src={Gaming} alt="icon" />
            <span>Игры</span>
          </div>
          <div className="items">
            <img src={Gallery} alt="icon" />
            <span>Галлерея</span>
          </div>
          <div className="items">
            <img src={Videos} alt="icon" />
            <span>Клипы</span>
          </div>
          <div className="items">
            <img src={Messages} alt="icon" />
            <span>Сообщения</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Другое</span>
          <div className="items">
            <img src={Tutorials} alt="icon" />
            <span>Обучение</span>
          </div>
          <div className="items">
            <img src={Courses} alt="icon" />
            <span>Курсы</span>
          </div>
          <div className="items">
            <img src={Fund} alt="icon" />
            <span>Фонд</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
