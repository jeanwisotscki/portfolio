import React from "react";
import Head from "next/head";
import Image from "next/image";

import * as Atom from "./styles";
import * as Comp from "../../components";

const Projetos = () => {
  return (
    <>
      <Head>
        <title>Jean Wisotscki | Projetos</title>
      </Head>
      <Comp.LayoutBase>
        <Comp.PageTitle title="Projetos" borderColor="purple" />

        <Atom.Container>
          <Atom.Paragraph>
            Aqui estão alguns dos meus projetos práticos. Ao clicar em algum,
            abrirá uma nova guia que leva diretamente ao repositório do projeto
            no github.
          </Atom.Paragraph>

          <Atom.CarouselWrapper>
            <Comp.Carousel />
          </Atom.CarouselWrapper>

          <Atom.ButtonWrapper>
            <Comp.RedirectButton
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
            </Comp.RedirectButton>
          </Atom.ButtonWrapper>
        </Atom.Container>
      </Comp.LayoutBase>
    </>
  );
};

export default Projetos;
