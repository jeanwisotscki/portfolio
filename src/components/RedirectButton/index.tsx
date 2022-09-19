import { ReactNode } from "react";

import { ButtonWrapper, IconWrapper } from "./styles";

interface RedirectButtonProps {
  children: string;
  icon: ReactNode;
  href: string;
  color: "purple" | "blue" | "red" | "white";
}

export const RedirectButton = (props: RedirectButtonProps) => {
  const color =
    props.color === "purple"
      ? "#b93bf4"
      : props.color === "blue"
      ? "#2647f4"
      : props.color === "red"
      ? "#f43b3b"
      : "white";

  return (
    <a href={props.href} rel="noreferrer" target="_blank">
      <ButtonWrapper style={{ border: `2px solid ${color}` }}>
        <button style={{ color: `${color}` }}>{props.children}</button>
        <IconWrapper>{props.icon}</IconWrapper>
      </ButtonWrapper>
    </a>
  );
};
