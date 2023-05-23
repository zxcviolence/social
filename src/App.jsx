import Login from "./pages/login";
import Register from "./pages/register";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Leftbar from "./components/leftbar";
import Rightbar from "./components/rightbar";

function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <Outlet />
          <Rightbar />
        </div>
      </div>
    );
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Layout />} />
    </Routes>
  );
}

export default App;
