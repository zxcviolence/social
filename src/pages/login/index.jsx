import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const { login } = React.useContext(AuthContext);

  const handleLogin = () => {
    login();
  };
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
            <button onClick={handleLogin}>Войти</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
