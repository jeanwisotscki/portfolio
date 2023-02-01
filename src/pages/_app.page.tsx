import React from "react";
import Head from "next/head";
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
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeContextProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeContextProvider>
    </>
  );
}

export default MyApp;
