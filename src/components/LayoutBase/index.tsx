import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../../contexts/ThemeContext";
import { darkTheme, lightTheme } from "../../styles/themes";

import { Header } from "../Header";

import { Container } from "./styles";

interface LayoutBaseProps {
  children: ReactNode;
}

export const LayoutBase = (props: LayoutBaseProps) => {
  const { theme } = React.useContext(ThemeContext);

  React.useEffect(() => {
    console.log("app tema:", theme);
  }, [theme]);

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Header />
        <Container>{props.children}</Container>
      </ThemeProvider>
    </>
  );
};
