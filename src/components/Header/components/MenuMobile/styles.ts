import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  z-index: 9;

  button {
    width: 30px;
    height: 30px;
    color: ${(props) => props.theme.colors.white};
    background: none;
    border: none;
    z-index: 9;
  }

  nav {
    background-color: ${(props) => props.theme.colors.bgDarkBlue};
    color: ${(props) => props.theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;

    ul li a {
      display: block;
      font-weight: bold;
      border-bottom: 2px solid ${(props) => props.theme.colors.green};
      padding: 1rem 3rem;
    }
  }
`;
