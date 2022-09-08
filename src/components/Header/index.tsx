import { Logo } from "./components/Logo";
import { Navbar } from "./components/Navbar";

import { ContentContainer, HeaderContainer } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <ContentContainer>
        <Logo />
        <Navbar />
      </ContentContainer>
    </HeaderContainer>
  );
};
