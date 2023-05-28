import React from "react";
import userAvatar from "../assets/avatars/userAv.jpg";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(
    JSON.parse(localStorage.getItem("user")) || false
  );

  const login = () => {
    setCurrentUser({
      id: 1,
      name: "No Brain",
      image: userAvatar,
    });
  };

  React.useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
