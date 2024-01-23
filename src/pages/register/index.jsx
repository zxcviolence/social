import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="cart">
        <div className="left">
          <h1>Hello World.</h1>
          <p>GSX - крупнейшая социальная сеть в России и странах СНГ. Наша миссия — соединять людей, сервисы и компании, создавая простые и удобные инструменты коммуникации.</p>
          <span>Уже есть аккаунт?</span>
          <Link to="/login">
            <button>Войти</button>
          </Link>
        </div>
        <div className="right">
          <h1>Регистрация</h1>
          <form>
            <input type="text" placeholder="Имя пользователя" />
            <input type="email" placeholder="Электронная почта" />
            <input type="password" placeholder="Пароль" />
            <input type="password" placeholder="Подтвердить пароль" />
            <button>Зарегистрироваться</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
