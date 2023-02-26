import styled from "styled-components";

export const Container = styled.div`
  width: 40px;
  height: 40px;
  background-color: inherit;
  padding: 8px;
  border-radius: 100%;
  color: ${({ theme }) => theme.fontColor200};
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:active {
    background-color: ${({ theme }) => theme.color100};
    transition: all 0.1s ease-in-out;
  }
`;
