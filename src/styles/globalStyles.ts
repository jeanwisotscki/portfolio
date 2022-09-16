import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    min-height: 100vh;
    background: rgb(13, 15, 57);
    background: linear-gradient(
      145deg,
      rgba(13, 15, 57, 1) 0%,
      rgba(1, 1, 13, 1) 100%
    );

    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  button {
    outline: none;
    cursor: pointer;
  }

  .swiper-pagination-bullet {
    height: 15px;
    width: 15px;
    border: 2px solid #fb1 !important;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    height: 15px;
    width: 15px;
    background-color: #fb1 !important;
    border-color: #fb1 !important;
  }

`;
