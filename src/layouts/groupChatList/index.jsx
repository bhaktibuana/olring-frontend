import React from "react";

import { Container } from "./style";

const GroupChatList = ({ parentWidth, tabItem, indexKey }) => {
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
        <Container parentWidth={parentWidth}></Container>
      ) : null}
    </>
  );
};

export default GroupChatList;
