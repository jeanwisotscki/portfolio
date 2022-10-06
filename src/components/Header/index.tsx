import React from "react";

import { Logo } from "./components/Logo";
import { Navbar } from "./components/Navbar";
import { MenuMobile } from "./components/MenuMobile";

import { useMediaQuery } from "../../hooks/useMediaQuery";

import { ContentContainer, HeaderContainer } from "./styles";

export const Header = () => {
  const mediaIsMatched = useMediaQuery("(max-width: 769px)");

  const [isMobile, setIsMobile] = React.useState(true);
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  React.useEffect(() => {
    const screenWidth = window.innerWidth;

    if (mediaIsMatched || screenWidth <= 769) {
      setIsMobile(true);
      return;
    }

    setIsMobile(false);
  }, [mediaIsMatched]);

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
