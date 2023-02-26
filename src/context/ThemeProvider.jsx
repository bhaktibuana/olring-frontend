import React, { useContext, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../themes/theme";

const ThemeContext = React.createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(true);
  const [theme, setTheme] = useState({});

  const setIsDarkTheme = (value) => {
    setDark(value);
  };

  useEffect(() => {
    if (dark) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }, [dark]);

  return (
    <>
      <ThemeContext.Provider
        value={{ theme, isDarkTheme: dark, setIsDarkTheme }}
      >
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;
