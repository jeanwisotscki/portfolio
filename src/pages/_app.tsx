import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../styles/globalStyles";

/*
verde: #26f447
roxo: #b93bf4
azul: #2647f4
vermelho: #f43b3b
branco: #fffcfc


background-azul:  #0d0f39
background-preto:  #01010d
*/

const theme = {
  colors: {
    green: "#26f447",
    purple: "#b93bf4",
    blue: "#2647f4",
    red: "#f43b3b",
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
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
