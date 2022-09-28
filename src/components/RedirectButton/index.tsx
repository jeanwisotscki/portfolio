import { ReactNode } from "react";

import { Button, ButtonWrapper, IconWrapper } from "./styles";

interface RedirectButtonProps {
  children: string;
  icon: ReactNode;
  href: string;
  color: "purple" | "blue" | "red" | "white";
}

export const RedirectButton = (props: RedirectButtonProps) => {
  return (
    <a href={props.href} rel="noreferrer" target="_blank">
      <ButtonWrapper borderColor={props.color}>
        <Button color={props.color}>{props.children}</Button>
        <IconWrapper>{props.icon}</IconWrapper>
      </ButtonWrapper>
    </a>
  );
};
