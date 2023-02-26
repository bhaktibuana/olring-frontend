import styled from "styled-components";

export const Container = styled.div`
  width: ${({ parentWidth }) => parentWidth}px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color600};
`;

export const SearchContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  background-color: inherit;
`;

export const SearchLeftContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  padding-left: 12px;
`;

export const SearchRightContent = styled.div`
  min-width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
`;
