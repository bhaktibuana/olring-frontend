import React, { useContext, useEffect, useState } from "react";
import { blue, green, red, orange, pink } from "../themes/color";

const ColorContext = React.createContext();

export const useColor = () => {
  return useContext(ColorContext);
};

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("blue");
  const [colorPlt, setColorPlt] = useState({});

  const setColorPalette = (value) => {
    setColor(value);
  };

  useEffect(() => {
    switch (color) {
      case "blue":
        setColorPlt(blue);
        break;
      case "green":
        setColorPlt(green);
        break;
      case "red":
        setColorPlt(red);
        break;
      case "orange":
        setColorPlt(orange);
        break;
      case "pink":
        setColorPlt(pink);
        break;
      default:
        break;
    }
  }, [color]);

  return (
    <>
      <ColorContext.Provider
        value={{ colorPalette: colorPlt, setColorPalette }}
      >
        {children}
      </ColorContext.Provider>
    </>
  );
};

export default ColorProvider;
