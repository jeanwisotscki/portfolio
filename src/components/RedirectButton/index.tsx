import { ReactNode } from "react";

import { ButtonWrapper, IconWrapper } from "./styles";

interface RedirectButtonProps {
  children: string;
  icon: ReactNode;
  href: string;
}

export const RedirectButton = (props: RedirectButtonProps) => {
  return (
    <a href={props.href} rel="noreferrer" target="_blank">
      <ButtonWrapper>
        <button>{props.children}</button>
        <IconWrapper>{props.icon}</IconWrapper>
      </ButtonWrapper>
    </a>
  );
};
