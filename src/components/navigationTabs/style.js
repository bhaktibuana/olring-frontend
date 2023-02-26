import styled from "styled-components";

export const Container = styled.nav`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color300};

  & a {
    background-color: inherit;
    font-size: 1rem;
    width: ${({ containerWidth, tabCount }) => containerWidth / tabCount}px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.fontColor300};
    text-decoration: none;
    line-height: 50px;
    position: relative;
    z-index: 1;
    display: inline-block;
    text-align: center;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    transition: all 0.5s ease 0s;
    cursor: pointer;
  }

  & .animation {
    position: absolute;
    height: 100%;
    height: 5px;
    bottom: 0;
    z-index: 1;
    background: ${({ colorPalette }) => colorPalette.primaryColor};
    border-radius: 8px;
    transition: all 0.5s ease 0s;
  }

  & .animation-start,
  .animation {
    width: ${({ containerWidth, tabCount }) => containerWidth / tabCount}px;
    left: ${({ containerWidth, tabCount, selectedTab }) =>
      (containerWidth / tabCount) * selectedTab}px;
  }
`;
