import chelsey from "../../assets/avatars/chelseyAv.jpg";
import cullen from "../../assets/avatars/cullenAv.jpg";
import dustin from "../../assets/avatars/dustinAv.jpg";
import jae from "../../assets/avatars/jaeAv.jpg";
import jane from "../../assets/avatars/janedoeAv.jpg";
import john from "../../assets/avatars/jonhdoeAv.jpg";
import leyla from "../../assets/avatars/leylaAv.jpeg";
import malcolm from "../../assets/avatars/malkolmAv.jpg";
import sal from "../../assets/avatars/salAv.jpg";
import selma from "../../assets/avatars/selmaAv.jpeg";
import "./rightbar.scss";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Рекомендовано для вас</span>
          <div className="user">
            <div className="userInfo">
              <img src={selma} alt="" />
              <span>Selma Driscoll</span>
            </div>
            <div className="buttons">
              <button>подписаться</button>
              <button>отклонить</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={malcolm} alt="" />
              <span>Malcolm Case</span>
            </div>
            <div className="buttons">
              <button>подписаться</button>
              <button>отклонить</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Последние действия</span>
          <div className="user">
            <div className="userInfo">
              <img src={jane} alt="" />
              <p>
                <span>Jane Doe</span> изменила обложку профиля
              </p>
            </div>
            <span>1 мин назад</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={john} alt="" />
              <p>
                <span>John Doe</span> понравился пост
              </p>
            </div>
            <span>3 мин назад</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={john} alt="" />
              <p>
                <span>John Doe</span> понравился комментарий
              </p>
            </div>
            <span>3 мин назад</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={jane} alt="" />
              <p>
                <span>Jane Doe</span> опубликовала пост
              </p>
            </div>
            <span>4 мин назад</span>
          </div>
        </div>
        <div className="item">
          <span>Друзья в сети</span>
          <div className="user">
            <div className="userInfo">
              <img src={chelsey} alt="" />
              <div className="online" />
              <span>Chelsey Sidney</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={jae} alt="" />
              <div className="online" />
              <span>Jae Jocelyn</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={sal} alt="" />
              <div className="online" />
              <span>Sal Rube</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={jane} alt="" />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={john} alt="" />
              <div className="online" />
              <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={dustin} alt="" />
              <div className="online" />
              <span>Dustin Jules</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={cullen} alt="" />
              <div className="online" />
              <span>Cullen Roxane</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={leyla} alt="" />
              <div className="online" />
              <span>Rylie Leyla</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
