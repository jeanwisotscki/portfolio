import React from "react";
import { ThemeProvider } from "styled-components";

import { Header } from "../Header";

import { ThemeContext } from "../../contexts/ThemeContext";
import { darkTheme, lightTheme } from "../../styles/themes";

import { Container } from "./styles";

interface LayoutBaseProps {
  children: React.ReactNode;
}

export const LayoutBase = (props: LayoutBaseProps) => {
  const { theme } = React.useContext(ThemeContext);

  React.useEffect(() => {
    console.log("tema atual: " + theme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Header />
      <Container>{props.children}</Container>
    </ThemeProvider>
  );
};
