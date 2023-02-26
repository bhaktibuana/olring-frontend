import React from "react";
import { useTheme } from "../../context/ThemeProvider";

import { Container } from "./style";

const RightNavbar = () => {
  const { theme } = useTheme();

  return (
    <>
      <Container theme={theme}></Container>
    </>
  );
};

export default RightNavbar;
