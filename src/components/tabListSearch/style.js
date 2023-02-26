import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 35px;
  background-color: ${({ theme }) => theme.color300};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
`;

export const SearchIcon = styled.div`
  min-width: 65px;
  height: 100%;
  border-radius: 0.5rem 0 0 0.5rem;
  background-color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  & > #icon-search-tab-list {
    color: ${({ theme, colorPalette, isSearchFocus }) =>
      isSearchFocus ? colorPalette.primaryColor : theme.fontColor400};
    background-color: inherit;
    transition: all 0.2s ease 0s;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 20px;
  outline: none;
  border: none;
  background-color: inherit;
  color: ${({ theme }) => theme.fontColor100};
  font-size: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.fontColor400};
    transition: all 0.3s ease 0s;
  }

  &:focus::placeholder {
    color: transparent;
    transition: all 0.1s ease 0s;
  }
`;

export const SearchAction = styled.div`
  min-width: 32px;
  height: 100%;
  border-radius: 0 0.5rem 0.5rem 0;
  background-color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;
