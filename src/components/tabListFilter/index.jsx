import React, { useState } from "react";
import { IoFilter } from "react-icons/io5";
import { useColor } from "../../context/ColorProvider";
import { useTheme } from "../../context/ThemeProvider";

import { Container } from "./style";

const TabListFilter = () => {
  const { colorPalette } = useColor();
  const { theme } = useTheme();
  const [isOnFilter, setIsOnFilter] = useState(false);

  return (
    <>
      <Container
        theme={theme}
        colorPalette={colorPalette}
        isOnFilter={isOnFilter}
      >
        <IoFilter
          id="icon-filter-tab-list"
          size={18}
          onClick={() => setIsOnFilter(!isOnFilter)}
        />
      </Container>
    </>
  );
};

export default TabListFilter;
