import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
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
    border: 2px solid #b93bf4 !important;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    height: 15px;
    width: 15px;
    background-color: #b93bf4 !important;
    border-color: #b93bf4 !important;
  }

`;
