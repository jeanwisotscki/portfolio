import Link from "next/link";

import { ToggleThemeButton } from "../ToggleThemeButton";

import * as Atom from "./styles";

export const Navbar = () => {
  return (
    <Atom.Nav>
      <Atom.NavUl>
        <Atom.NavLi>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Atom.NavLi>

        <Atom.NavLi>
          <Link href="/projetos">
            <a>Projetos</a>
          </Link>
        </Atom.NavLi>

        <Atom.NavLi>
          <Link href="/sobre">
            <a>Sobre</a>
          </Link>
        </Atom.NavLi>

        <Atom.NavLi>
          <Link href="/contato">
            <a>Contato</a>
          </Link>
        </Atom.NavLi>

        <Atom.NavLi>
          <ToggleThemeButton />
        </Atom.NavLi>
      </Atom.NavUl>
    </Atom.Nav>
  );
};
