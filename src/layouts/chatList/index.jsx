import React from "react";
import { useTheme } from "../../context/ThemeProvider";
import TabListSearch from "../../components/tabListSearch";
import TabListFilter from "../../components/tabListFilter";

import {
  Container,
  SearchContainer,
  SearchLeftContent,
  SearchRightContent,
} from "./style";

const ChatList = ({ parentWidth, tabItem, indexKey }) => {
  const { theme } = useTheme();

  const getTabItemActive = () => {
    const index = tabItem
      .map((item, index) => {
        if (item.isActive) {
          return index;
        }
        return null;
      })
      .filter((item) => item !== null);

    return parseInt(index.join(""));
  };

  return (
    <>
      {getTabItemActive() === indexKey ? (
        <Container theme={theme} parentWidth={parentWidth}>
          <SearchContainer>
            <SearchLeftContent>
              <TabListSearch placeholder="Search chat" />
            </SearchLeftContent>

            <SearchRightContent>
              <TabListFilter />
            </SearchRightContent>
          </SearchContainer>
        </Container>
      ) : null}
    </>
  );
};

export default ChatList;
