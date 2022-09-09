import React from "react";

import { Logo } from "./components/Logo";
import { MenuMobile } from "./components/MenuMobile";
import { Navbar } from "./components/Navbar";

import { ContentContainer, Hamburger, HeaderContainer } from "./styles";

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  return (
    <HeaderContainer>
      <ContentContainer>
        <Logo />
        <Navbar />
        <MenuMobile menuIsOpen={menuIsOpen} />
        <Hamburger onClick={() => setMenuIsOpen((prevValue) => !prevValue)}>
          toggle
        </Hamburger>
      </ContentContainer>
    </HeaderContainer>
  );
};
