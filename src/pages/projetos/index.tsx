import React from "react";
import { Carousel } from "../../components/Carousel";

import { LayoutBase } from "../../components/LayoutBase";
import { PageTitle } from "../../components/PageTitle";
import { Container } from "./styles";

//<PageTitle title="Projetos" />

const Projetos = () => {
  return (
    <LayoutBase>
      <Container>
        <Carousel />
      </Container>
    </LayoutBase>
  );
};

export default Projetos;
