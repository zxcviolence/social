import "./rightbar.scss";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggesting For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZqLcqktFO6szrtn2wpVR2N2rsEkUih5gi7w&usqp=CAU"
                alt=""
              />
              <span>Selma Driscoll</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://kartinkin.net/uploads/posts/2021-07/thumbs/1626162628_7-kartinkin-com-p-grustnaya-ava-anime-patsan-anime-krasivo-7.jpg"
                alt=""
              />
              <span>Malcolm Case</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://otkrit-ka.ru/uploads/posts/2022-02/foto-i-krasivye-kartinki-na-avu-v-kontakte-2.jpg"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://android-obzor.com/wp-content/uploads/2022/03/1-104.jpg"
                alt=""
              />
              <p>
                <span>John Doe</span> liked a post
              </p>
            </div>
            <span>3 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://android-obzor.com/wp-content/uploads/2022/03/1-104.jpg"
                alt=""
              />
              <p>
                <span>John Doe</span> liked a comment
              </p>
            </div>
            <span>3 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://otkrit-ka.ru/uploads/posts/2022-02/foto-i-krasivye-kartinki-na-avu-v-kontakte-2.jpg"
                alt=""
              />
              <p>
                <span>Jane Doe</span> posted
              </p>
            </div>
            <span>4 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://anime-star.ru/wp-content/uploads/2021/12/Nyashnye-anime-avatarki-tyan_10.jpg"
                alt=""
              />
              <div className="online" />
              <span>Chelsey Sidney</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://coolsen.ru/wp-content/uploads/2021/12/78-20211222_191723.jpg"
                alt=""
              />
              <div className="online" />
              <span>Jae Jocelyn</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://sun9-78.userapi.com/impg/nbUKhYxc685xhKUpLC9FJbNkGZQHZWXwzLRnkQ/d-8SGjNCY4E.jpg?size=479x600&quality=96&sign=fa37f8b91a2a41408fccef2d4d7c9df4&type=album"
                alt=""
              />
              <div className="online" />
              <span>Sal Rube</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://otkrit-ka.ru/uploads/posts/2022-02/foto-i-krasivye-kartinki-na-avu-v-kontakte-2.jpg"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://android-obzor.com/wp-content/uploads/2022/03/1-104.jpg"
                alt=""
              />
              <div className="online" />
              <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://cspromogame.ru//storage/upload_images/avatars/1537.jpg"
                alt=""
              />
              <div className="online" />
              <span>Dustin Jules</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://aniyuki.com/wp-content/uploads/2021/06/aniyuki-funny-anime-avatars-72.jpg"
                alt=""
              />
              <div className="online" />
              <span>Cullen Roxane</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://anime-fans.ru/wp-content/uploads/2021/02/Smeshnye-anime-avy-v-luchshem-kachestve-26.jpeg"
                alt=""
              />
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
