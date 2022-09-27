import React from "react";
import { ThemeProvider } from "styled-components";

import { Header } from "../Header";

import { ThemeContext } from "../../contexts/ThemeContext";
import { darkTheme, lightTheme } from "../../styles/themes";

import { Container, MainContainer } from "./styles";

interface LayoutBaseProps {
  children: React.ReactNode;
}

export const LayoutBase = (props: LayoutBaseProps) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <MainContainer>
        <Header />
        <Container>{props.children}</Container>
      </MainContainer>
    </ThemeProvider>
  );
};
