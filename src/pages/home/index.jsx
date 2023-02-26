import React, { useState } from "react";
import { useTheme } from "../../context/ThemeProvider";
import LeftNavbar from "../../layouts/leftNavbar";
import Menu from "../../layouts/menu";

import { Container, Content, LeftContent, RightContent } from "./style";

const Home = () => {
  const { theme } = useTheme();

  return (
    <>
      <Container theme={theme}>
        <Content theme={theme}>
          <LeftContent>
            <LeftNavbar />
            <Menu />
          </LeftContent>

          <RightContent theme={theme}></RightContent>
        </Content>
      </Container>
    </>
  );
};

export default Home;
