import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./login.scss";

const Login = () => {
  const authUser = useSelector(selectUser);

  const [currentUser, setCurrentUser] = React.useState(
    JSON.parse(localStorage.getItem("user")) || false
  );

  const login = () => {
    setCurrentUser(authUser);
  };

  React.useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <div className="login">
      <div className="cart">
        <div className="left">
          <h1>Welcome</h1>
          <p>
            Ключевые ценности DexSocial — наши пользователи и команда. Соединяя
            миллионы людей и передовые технологии, мы создаём простые и удобные
            сервисы, которые позволяют общаться с друзьями, развивать бизнес,
            учиться и отдыхать, заниматься повседневными вопросами, получать
            новые впечатления, делиться ими — и многое другое.
          </p>
          <span>Нет аккаунта?</span>
          <Link to="/register">
            <button>Регистрация</button>
          </Link>
        </div>
        <div className="right">
          <h1>Вход</h1>
          <form>
            <input type="text" placeholder="Имя пользователя" />
            <input type="password" placeholder="Пароль" />
            <button onClick={() => login()}>Войти</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
