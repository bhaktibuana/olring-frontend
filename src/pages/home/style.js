import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.rootColor};
  margin: 0;
  padding: 0;

  @media screen and (min-width: 1441px) {
    padding: 20px 20px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.color600};
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.05);

  @media screen and (min-width: 1441px) {
    width: 1600px;
  }
`;

export const LeftContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: inherit;

  @media screen and (min-width: 769px) {
    width: calc(100% * 30 / 100);
  }
`;

export const RightContent = styled.div`
  width: 0%;
  height: 100%;
  background-color: ${({ theme }) => theme.color300};
  transition: 0.15s all ease-in-out;

  @media screen and (min-width: 769px) {
    width: calc(100% * 70 / 100);
  }
`;
