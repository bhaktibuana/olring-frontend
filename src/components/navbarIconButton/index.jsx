import React from "react";
import { useTheme } from "../../context/ThemeProvider";

import { Container } from "./style";

const NavbarIconButton = (props) => {
  const { theme } = useTheme();
  const { Icon } = props;
  return (
    <>
      <Container theme={theme}>
        <Icon size={22} style={{ backgroundColor: "inherit" }} />
      </Container>
    </>
  );
};

export default NavbarIconButton;
