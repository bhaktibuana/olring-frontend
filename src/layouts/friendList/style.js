import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: ${({ parentWidth }) => parentWidth}px;
  height: 100%;
  background-color: yellow;
`;
