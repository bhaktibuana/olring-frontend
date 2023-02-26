import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  padding: 10px 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color300};
`;

export const LeftContent = styled.div`
  width: auto;
  height: 100%;
  background-color: inherit;
  display: flex;
  flex-direction: row;
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  outline: none;
  border-radius: 100%;
  margin-right: 10px;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
`;

export const ProfileDesc = styled.div`
  width: auto;
  height: 100%;
  background-color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProfileName = styled.p`
  color: ${({ theme }) => theme.fontColor100};
  background-color: inherit;
  font-size: 1rem;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`;

export const ProfileUsername = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  background-color: inherit;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
`;

export const Username = styled.p`
  color: ${({ theme }) => theme.fontColor100};
  background-color: inherit;
  font-size: 0.9rem;
`;

export const Tag = styled.p`
  color: ${({ theme }) => theme.fontColor400};
  background-color: inherit;
  font-size: 0.9rem;
`;

export const RightContent = styled.div`
  width: auto;
  height: 100%;
  background-color: inherit;
  display: none;

  @media screen and (min-width: 426px) {
    display: flex;
    flex-direction: row;
  }

  @media screen and (min-width: 769px) {
    display: none;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row;
  }
`;

export const RightContentMobile = styled.div`
  width: auto;
  height: 100%;
  background-color: inherit;
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 426px) {
    display: none;
  }

  @media screen and (min-width: 769px) {
    display: flex;
    flex-direction: row;
  }

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;
