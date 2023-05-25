import React from "react";

export const DarkModeContext = React.createContext();

const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  React.useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
