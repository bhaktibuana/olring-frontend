import React, { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeProvider";
import {
  IoChatbubbleEllipsesSharp,
  IoLogoWechat,
  IoPeople,
} from "react-icons/io5";
import NavigationTabs from "../../components/navigationTabs";
import ChatList from "../chatList";
import GroupChatList from "../groupChatList";
import FriendList from "../friendList";

import { Container, Content, ContentContainer, Navigation } from "./style";

const tabItemObj = [
  {
    name: "Chats",
    icon: () => (
      <IoChatbubbleEllipsesSharp
        size={22}
        style={{ backgroundColor: "inherit" }}
      />
    ),
    isActive: true,
  },
  {
    name: "Groups",
    icon: () => (
      <IoLogoWechat size={22} style={{ backgroundColor: "inherit" }} />
    ),
    isActive: false,
  },
  {
    name: "Friends",
    icon: () => <IoPeople size={22} style={{ backgroundColor: "inherit" }} />,
    isActive: false,
  },
];

const Menu = () => {
  const { theme } = useTheme();
  const [tabItem, setTabItem] = useState(tabItemObj);
  const [containerWidth, setContainerWidth] = useState(0);

  const getContainerWidth = () => {
    setContainerWidth(document.getElementById("container-menu").clientWidth);
  };

  window.onresize = getContainerWidth;

  useEffect(() => {
    getContainerWidth();
  }, []);

  return (
    <>
      <Container id="container-menu">
        <Navigation>
          <NavigationTabs
            tabItem={tabItem}
            setTabItem={setTabItem}
            containerWidth={containerWidth}
          />
        </Navigation>

        <Content theme={theme}>
          <ContentContainer theme={theme}>
            <ChatList
              parentWidth={containerWidth}
              tabItem={tabItem}
              indexKey={0}
            />
            <GroupChatList
              parentWidth={containerWidth}
              tabItem={tabItem}
              indexKey={1}
            />
            <FriendList
              parentWidth={containerWidth}
              tabItem={tabItem}
              indexKey={2}
            />
          </ContentContainer>
        </Content>
      </Container>
    </>
  );
};

export default Menu;
