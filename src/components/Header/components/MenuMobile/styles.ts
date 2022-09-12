import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  button {
    width: 30px;
    height: 30px;
    color: #fff;
    background: none;
    border: none;
    z-index: 5;
  }

  nav {
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    ul li a {
      display: block;
      font-weight: bold;
      border-bottom: 2px solid #24f3ef;
      padding: 1rem 3rem;
    }
  }
`;
