import React from "react";

import { Logo } from "./components/Logo";
import { Navbar } from "./components/Navbar";
import { MenuMobile } from "./components/MenuMobile";

import { useMediaScreen } from "../../hooks/useMediaScreen";

import { ContentContainer, HeaderContainer } from "./styles";

export const Header = () => {
  const isMobile = useMediaScreen("(max-width: 769px)");
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  return (
    <HeaderContainer>
      <ContentContainer>
        <Logo />

        {isMobile ? (
          <MenuMobile menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        ) : (
          <Navbar />
        )}
      </ContentContainer>
    </HeaderContainer>
  );
};
