import React from "react";
import Image from "next/image";

import { Carousel } from "../../components/Carousel";
import { PageTitle } from "../../components/PageTitle";
import { LayoutBase } from "../../components/LayoutBase";
import { RedirectButton } from "../../components/RedirectButton";

import { ButtonWrapper, CarouselWrapper, Container, Paragraph } from "./styles";

//
const Projetos = () => {
  return (
    <LayoutBase>
      <PageTitle title="Projetos" borderColor="purple" />

      <Container>
        <Paragraph>
          Esses são alguns dos meus projetos, todos foram feitos única e
          exclusivamente por mim, desde a criação do layout até a hospedagem.
        </Paragraph>

        <CarouselWrapper>
          <Carousel />
        </CarouselWrapper>

        <ButtonWrapper>
          <RedirectButton
            href="https://github.com/jeanwisotscki/"
            color="purple"
            icon={
              <Image
                src={"/github-icon-purple.svg"}
                width={50}
                height={50}
                alt="github icon"
              />
            }
          >
            veja mais
          </RedirectButton>
        </ButtonWrapper>
      </Container>
    </LayoutBase>
  );
};

export default Projetos;
