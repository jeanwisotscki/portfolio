import React from "react";
import type { AppProps } from "next/app";

import ThemeContextProvider from "../contexts/ThemeContext";

import { GlobalStyle } from "../styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

export default MyApp;
