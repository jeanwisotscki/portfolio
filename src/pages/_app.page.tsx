import React from "react";
import type { AppProps } from "next/app";

import ThemeContextProvider from "../contexts/ThemeContext";

import { GlobalStyle } from "../styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    console.log(
      "E é claro que eu não poderia perder a chance de me divulgar aqui também 😁 \n\nLINKEDIN: https://www.linkedin.com/in/jean-wisotscki/"
    );
  }, []);

  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

export default MyApp;
