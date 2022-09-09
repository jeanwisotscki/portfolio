import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

import { Container } from "./styles";

interface MenuMobileProps {
  menuIsOpen: boolean;
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const MenuMobile = (props: MenuMobileProps) => {
  return (
    <Container>
      <button onClick={() => props.setMenuIsOpen((prevValue) => !prevValue)}>
        toggle
      </button>

      {props.menuIsOpen && (
        <nav style={{ color: "#fff " }}>
          <Link href="/">
            <a>Home</a>
          </Link>

          <Link href="/">
            <a>Projetos</a>
          </Link>
          <Link href="/">
            <a>Sobre</a>
          </Link>
          <Link href="/">
            <a>Contato</a>
          </Link>
        </nav>
      )}
    </Container>
  );
};
