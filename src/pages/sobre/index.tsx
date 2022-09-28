import React from "react";

import { Accordion } from "../../components/Accordion";
import { PageTitle } from "../../components/PageTitle";
import { LayoutBase } from "../../components/LayoutBase";

import { Container, TextContainer } from "./styles";
import LinkButton from "../../components/LinkButton";

const Sobre = () => {
  return (
    <LayoutBase>
      <PageTitle title="Sobre" borderColor="blue" />
      <Container>
        <Accordion />
        <TextContainer>
          <h2>Jean Wisotscki</h2>
          <p>
            Estudante de Analise e Desenvolvimento de Sistemas pela UNINTER, em
            busca da primeira oportunidade profissional na area.
          </p>
          <br />
          <p>
            Atualmente tenho focado os meus estudos na parte front-end, mais
            precisamente, em{" "}
            <LinkButton href="https://nextjs.org/" textContent="Next.js" />,{" "}
            <LinkButton
              href="https://www.typescriptlang.org/"
              textContent="TypeScript"
            />{" "}
            e{" "}
            <LinkButton
              href="https://styled-components.com/"
              textContent="Styled-components"
            />
            .
          </p>
          <br />

          <h3>Minha trilha como programador</h3>
          <p>
            Em 2020 comecei a estudar algoritmos e estrutura de dados pelo
            youtube por incentivo de um amigo, porém, achei que aquilo não era
            pra mim e logo desisti. Um tempo se passou e em 2021 eu resolvi
            voltar e tentar de novo, foi aí que eu encontrei o canal{" "}
            <LinkButton
              href="https://www.youtube.com/c/CursoemV%C3%ADdeo"
              textContent="Curso em Video"
            />{" "}
            e tive meu primeiro contato com <strong>Python</strong> e entendi um
            pouco mais sobre lógica de programação.
          </p>
          <br />
          <p>
            Estudei Python por alguns meses e comecei a sentir a necessidade de
            algo mais palpável. Foi aí que eu comecei a aprender sobre{" "}
            <strong>HTML</strong>, <strong>CSS</strong> e{" "}
            <strong>JavaScript</strong>
          </p>
        </TextContainer>
      </Container>
    </LayoutBase>
  );
};

export default Sobre;
