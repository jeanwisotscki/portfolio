import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

import ThemeContextProvider from "../contexts/ThemeContext";

import { GlobalStyle } from "../styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="description"
          content="Meu site portfólio, feito com Next.js, TypeScript e Styled-components"
        />

        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />

        <title>Jean Wisotscki | Portfólio</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

export default MyApp;
