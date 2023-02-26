import React, { useState, useEffect, useRef } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useColor } from "../../context/ColorProvider";
import { useTheme } from "../../context/ThemeProvider";

import { Container, SearchAction, SearchIcon, SearchInput } from "./style";

const TabListSearch = ({ placeholder }) => {
  const { colorPalette } = useColor();
  const { theme } = useTheme();
  const [isSearchFocus, setIsSearchFocus] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    if (isSearchFocus) {
      searchRef.current.focus();
    } else {
      searchRef.current.blur();
    }
  }, [isSearchFocus]);

  return (
    <>
      <Container theme={theme}>
        <SearchIcon
          theme={theme}
          colorPalette={colorPalette}
          isSearchFocus={isSearchFocus}
        >
          <IoSearchSharp
            id="icon-search-tab-list"
            size={18}
            onClick={() => setIsSearchFocus(true)}
          />
        </SearchIcon>

        <SearchInput
          ref={searchRef}
          theme={theme}
          placeholder={placeholder}
          onFocus={() => setIsSearchFocus(true)}
          onBlur={() => setIsSearchFocus(false)}
          onKeyDown={(event) => {
            // esc key pressed
            if (event.keyCode === 27) {
              setIsSearchFocus(false);
            }
          }}
        />

        <SearchAction></SearchAction>
      </Container>
    </>
  );
};

export default TabListSearch;
