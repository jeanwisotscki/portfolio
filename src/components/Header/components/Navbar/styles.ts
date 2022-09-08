import styled from "styled-components";

export const Nav = styled.nav`
  background-color: blue;
`;

export const NavUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const NavLi = styled.li`
  background-color: white;

  a {
    display: block;
    padding: 0.7rem 1.2rem;
  }
`;
