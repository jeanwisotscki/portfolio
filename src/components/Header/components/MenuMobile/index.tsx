import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import { ToggleThemeButton } from "../../../ToggleThemeButton";

import { Container } from "./styles";

const IconClose = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

const IconHamburg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};

interface MenuMobileProps {
  menuIsOpen: boolean;
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const MenuMobile = (props: MenuMobileProps) => {
  return (
    <Container>
      <div>
        <ToggleThemeButton />
      </div>

      <button onClick={() => props.setMenuIsOpen((prevValue) => !prevValue)}>
        {props.menuIsOpen ? <IconClose /> : <IconHamburg />}
      </button>

      {props.menuIsOpen && (
        <nav>
          <ul onClick={() => props.setMenuIsOpen((prevValue) => !prevValue)}>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/projetos">
                <a>Projetos</a>
              </Link>
            </li>
            <li>
              <Link href="/sobre">
                <a>Sobre</a>
              </Link>
            </li>
            <li>
              <Link href="/contato">
                <a>Contato</a>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </Container>
  );
};
