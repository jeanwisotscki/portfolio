import Link from "next/link";
import { Nav, NavLi, NavUl } from "./styles";

export const Navbar = () => {
  return (
    <Nav>
      <NavUl>
        <NavLi>
          <Link href="/">
            <a>Home</a>
          </Link>
        </NavLi>

        <NavLi>
          <Link href="/projetos">
            <a>Projetos</a>
          </Link>
        </NavLi>
        <NavLi>
          <Link href="/sobre">
            <a>Sobre</a>
          </Link>
        </NavLi>
        <NavLi>
          <Link href="/contato">
            <a>Contato</a>
          </Link>
        </NavLi>
      </NavUl>
    </Nav>
  );
};
