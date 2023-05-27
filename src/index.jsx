import ReactDOM from "react-dom/client";
import App from "./App";
import DarkModeContextProvider from "./context/darkModeContext";
import AuthContextProvider from "./context/authContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <DarkModeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkModeContextProvider>
  </BrowserRouter>
);
