import React from "react";
import Login from "./pages/login";
import Register from "./pages/register";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import Leftbar from "./components/leftbar";
import Rightbar from "./components/rightbar";
import Home from "./pages/home";
import Profile from "./pages/profile";
import { DarkModeContext } from "./context/darkModeContext";
import "./style.scss";

function App() {
  const currentUser = true;

  const { darkMode } = React.useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
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
