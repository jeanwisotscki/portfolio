import React, { ReactNode } from "react";

import { Header } from "../Header";

import { Container } from "./styles";

interface LayoutBaseProps {
  children: ReactNode;
}

export const LayoutBase = (props: LayoutBaseProps) => {
  return (
    <>
      <Header />
      <Container>{props.children}</Container>
    </>
  );
};
