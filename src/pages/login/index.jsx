import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="cart">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum odit
            consequatur doloremque iure fuga aperiam accusantium, tempore
            delectus architecto dolores pariatur. Dolores eligendi porro rerum,
            nobis aut culpa. Vitae, vel.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
