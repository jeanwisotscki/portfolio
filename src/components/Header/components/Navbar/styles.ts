import styled from "styled-components";

export const Nav = styled.nav``;

export const NavUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 0;
`;

export const NavLi = styled.li`
  a {
    color: ${(props) => props.theme.colors.secondary};
    display: block;
    position: relative;
    padding: 0.7rem 1.2rem;

    &::before {
      content: "";
      background-color: ${(props) => props.theme.colors.primary};
      display: block;
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 0;
      height: 2px;
      transition: all 0.3s ease-in-out;
    }

    &:hover::before {
      width: 100%;
    }
  }
`;
