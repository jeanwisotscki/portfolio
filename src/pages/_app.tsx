import type { AppProps } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import ThemeContextProvider, { ThemeContext } from "../contexts/ThemeContext";

import { GlobalStyle } from "../styles/globalStyles";
import { darkTheme, lightTheme } from "../styles/themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

export default MyApp;
