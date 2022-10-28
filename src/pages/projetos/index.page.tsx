import React from "react";
import Head from "next/head";
import Image from "next/image";

import { Carousel } from "../../components/Carousel";
import { PageTitle } from "../../components/PageTitle";
import { LayoutBase } from "../../components/LayoutBase";
import { RedirectButton } from "../../components/RedirectButton";

import * as Atom from "./styles";

const Projetos = () => {
  return (
    <>
      <Head>
        <title>Jean Wisotscki | Projetos</title>
      </Head>
      <LayoutBase>
        <PageTitle title="Projetos" borderColor="purple" />

        <Atom.Container>
          <Atom.Paragraph>
            Aqui estão alguns dos meus projetos práticos. Ao clicar em algum,
            abrirá uma nova guia que leva diretamente ao repositório do projeto
            no github.
          </Atom.Paragraph>

          <Atom.CarouselWrapper>
            <Carousel />
          </Atom.CarouselWrapper>

          <Atom.ButtonWrapper>
            <RedirectButton
              href="https://github.com/jeanwisotscki/"
              color="purple"
              icon={
                <Image
                  src={"/svgs/github-icon-purple.svg"}
                  width={50}
                  height={50}
                  alt="github icon"
                />
              }
            >
              veja mais
            </RedirectButton>
          </Atom.ButtonWrapper>
        </Atom.Container>
      </LayoutBase>
    </>
  );
};

export default Projetos;
