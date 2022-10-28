import { ReactNode } from "react";

import * as Atom from "./styles";

interface RedirectButtonProps {
  href: string;
  icon: ReactNode;
  children: string;
  color: "purple" | "blue" | "red" | "white";
}

export const RedirectButton = (props: RedirectButtonProps) => {
  return (
    <a href={props.href} rel="noreferrer" target="_blank">
      <Atom.ButtonWrapper borderColor={props.color}>
        <Atom.Button color={props.color}>{props.children}</Atom.Button>
        <Atom.IconWrapper>{props.icon}</Atom.IconWrapper>
      </Atom.ButtonWrapper>
    </a>
  );
};
