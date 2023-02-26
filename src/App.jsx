import React from "react";
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  Outlet,
} from "react-router-dom";
import ColorProvider from "./context/ColorProvider";
import ThemeProvider from "./context/ThemeProvider";
import Home from "./pages/home";

import "./App.scss";

const App = () => {
  return (
    <>
      <ColorProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </ColorProvider>
    </>
  );
};

export default App;
