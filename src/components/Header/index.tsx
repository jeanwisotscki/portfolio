import React from "react";

import { Logo } from "./components/Logo";
import { MenuMobile } from "./components/MenuMobile";
import { Navbar } from "./components/Navbar";

import { useMediaScreen } from "../../hooks/useMediaScreen";

import { ContentContainer, Hamburger, HeaderContainer } from "./styles";

export const Header = () => {
  const isMobile = useMediaScreen("(max-width: 769px)");
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  return (
    <HeaderContainer>
      <ContentContainer>
        <Logo />

        {isMobile ? (
          <>
            <MenuMobile menuIsOpen={menuIsOpen} />
            <Hamburger onClick={() => setMenuIsOpen((prevValue) => !prevValue)}>
              toggle
            </Hamburger>
          </>
        ) : (
          <Navbar />
        )}
      </ContentContainer>
    </HeaderContainer>
  );
};
