import React, { useEffect, useState } from "react";
import { useColor } from "../../context/ColorProvider";
import { useTheme } from "../../context/ThemeProvider";

import { Container } from "./style";

const NavigationTabs = ({ tabItem, setTabItem, containerWidth }) => {
  const { colorPalette } = useColor();
  const { theme, isDarkTheme } = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);
  const [tab, setTab] = useState([]);

  const handleSelectedTab = (event, index) => {
    event.preventDefault();
    setSelectedTab(index);

    setTab((prev) => {
      for (let i = 0; i < prev.length; i++) {
        prev[i].isActive = false;
      }
      prev[index].isActive = true;

      return [...prev];
    });
  };

  useEffect(() => {
    setTab(tabItem);
  }, []);

  useEffect(() => {
    setTabItem(tab);
  }, [tab]);

  return (
    <>
      <Container
        id="container-tabs"
        colorPalette={colorPalette}
        theme={theme}
        containerWidth={containerWidth}
        tabCount={tab.length}
        selectedTab={selectedTab}
      >
        {tab.map((item, index) => {
          return (
            <a
              key={index}
              href="/"
              onClick={(event) => handleSelectedTab(event, index)}
              style={{
                color: item.isActive
                  ? isDarkTheme
                    ? `${theme.fontColor100}`
                    : "#6370f4"
                  : `${theme.fontColor200}`,
              }}
            >
              <item.icon />
            </a>
          );
        })}
        <div className="animation animation-start"></div>
      </Container>
    </>
  );
};

export default NavigationTabs;
