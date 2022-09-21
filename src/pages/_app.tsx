import type { AppProps } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import ThemeContextProvider, { ThemeContext } from "../contexts/ThemeContext";

import { GlobalStyle } from "../styles/globalStyles";

const themes = {
  colors: {
    bgDarkBlue: "#0d0f39",
    bgBlack: "#01010d",
    green: "#26f447",
    purple: "#b93bf4",
    blue: "#2647f4",
    red: "#f43b3b",
    yellow: "#fb1",
    pink: "#b2156a",
    white: "#FFFDF9",
    lightBlue: "#AFDBD2",
    onyx: "#36313D",
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = React.useContext(ThemeContext);
  console.log(theme);

  return (
    <ThemeContextProvider>
      <ThemeProvider theme={themes}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
