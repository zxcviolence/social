import { useContext } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "./context/authContext";
import { useSelector } from "react-redux";
import Login from "./pages/login";
import Register from "./pages/register";
import Navbar from "./components/navbar";
import Leftbar from "./components/leftbar";
import Rightbar from "./components/rightbar";
import Home from "./pages/home";
import Profile from "./pages/profile";
import "./style.scss";

function App() {
  const { currentUser } = useContext(AuthContext);

  const darkMode = useSelector((state) => state.darkTheme.darkMode);

  const Layout = () => {
    return (
      <div className={darkMode ? "theme-dark" : "theme-light"}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
