import styled from "styled-components";

export const Nav = styled.nav`
  @media (max-width: 769px) {
    display: none;
  }
`;

export const NavUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 0;
`;

export const NavLi = styled.li`
  a {
    color: #fff;
    display: block;
    padding: 0.7rem 1.2rem;
    border-bottom: 2px solid transparent;
    transition: 0.3s;

    &:hover {
      border-bottom: 2px solid #26f447;
    }
  }
`;
