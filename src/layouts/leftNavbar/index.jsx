import React from "react";
import { useTheme } from "../../context/ThemeProvider";

import NavbarIconButton from "../../components/navbarIconButton";
import {
  IoEllipsisVertical,
  IoLogOutOutline,
  IoSettingsOutline,
} from "react-icons/io5";

import {
  Container,
  LeftContent,
  ProfileDesc,
  ProfileImage,
  ProfileName,
  ProfileUsername,
  RightContent,
  RightContentMobile,
  Tag,
  Username,
} from "./style";

const LeftNavbar = () => {
  const { theme } = useTheme();

  return (
    <>
      <Container theme={theme}>
        <LeftContent>
          <ProfileImage src={require("../../assets/blank-profile.png")} />

          <ProfileDesc>
            <ProfileName theme={theme}>Bhakti Mega Buana</ProfileName>

            <ProfileUsername>
              <Username theme={theme}>merci</Username>
              <Tag theme={theme}>#3938</Tag>
            </ProfileUsername>
          </ProfileDesc>
        </LeftContent>

        <RightContentMobile>
          <NavbarIconButton Icon={IoEllipsisVertical} />
        </RightContentMobile>

        <RightContent>
          <NavbarIconButton Icon={IoSettingsOutline} />
          <NavbarIconButton Icon={IoLogOutOutline} />
        </RightContent>
      </Container>
    </>
  );
};

export default LeftNavbar;
