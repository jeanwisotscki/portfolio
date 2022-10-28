import React from "react";
import { ThemeProvider } from "styled-components";

import { Header } from "../Header";

import { ThemeContext } from "../../contexts/ThemeContext";
import { darkTheme, lightTheme } from "../../styles/themes";

import * as Atom from "./styles";

interface LayoutBaseProps {
  children: React.ReactNode;
}

export const LayoutBase = (props: LayoutBaseProps) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Atom.MainContainer>
        <Header />
        <Atom.Container>{props.children}</Atom.Container>
      </Atom.MainContainer>
    </ThemeProvider>
  );
};
