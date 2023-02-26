import styled from "styled-components";

export const Container = styled.div`
  width: 26px;
  height: 26px;
  background-color: ${({ colorPalette, isOnFilter }) =>
    isOnFilter ? colorPalette.primaryColor : "inherit"};
  transition: all 0.2s ease 0s;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > #icon-filter-tab-list {
    color: ${({ theme, isOnFilter }) =>
      isOnFilter ? theme.fontColor100 : theme.fontColor400};
    background-color: inherit;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
  }
`;
