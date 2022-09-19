import React from "react";

import { Accordion } from "../../components/Accordion";
import { PageTitle } from "../../components/PageTitle";
import { LayoutBase } from "../../components/LayoutBase";

import { Container } from "./styles";

const Sobre = () => {
  return (
    <LayoutBase>
      <PageTitle title="Sobre" borderColor="blue" />
      <Container>
        <Accordion />
      </Container>
    </LayoutBase>
  );
};

export default Sobre;
