import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: inherit;
`;

export const Navigation = styled.div`
  width: 100%;
  height: 50px;
  background-color: inherit;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: inherit;
`;

export const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.color600};
`;
