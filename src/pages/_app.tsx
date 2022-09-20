import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../styles/globalStyles";

const theme = {
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
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
