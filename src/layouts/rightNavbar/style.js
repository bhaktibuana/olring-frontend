import styled from "styled-components";

export const Container = styled.div`
  width: 0%;
  height: 100%;
  background-color: ${({ theme }) => theme.color300};
  transition: 0.1s all ease-in-out;

  @media screen and (min-width: 768px) {
    width: calc(100% * 70 / 100);
  }
`;
