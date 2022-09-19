import React from "react";
import Image from "next/image";

import { Carousel } from "../../components/Carousel";
import { PageTitle } from "../../components/PageTitle";
import { LayoutBase } from "../../components/LayoutBase";
import { RedirectButton } from "../../components/RedirectButton";

import { ButtonWrapper, CarouselWrapper, MainContainer } from "./styles";

//
const Projetos = () => {
  return (
    <LayoutBase>
      <PageTitle title="Projetos" borderColor="purple" />

      <MainContainer>
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
      </MainContainer>
    </LayoutBase>
  );
};

export default Projetos;
