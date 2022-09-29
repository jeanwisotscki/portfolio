import React from "react";

import { Accordion } from "../../components/Accordion";
import { PageTitle } from "../../components/PageTitle";
import { LayoutBase } from "../../components/LayoutBase";

import { Container, TextContainer } from "./styles";
import LinkButton from "../../components/LinkButton";

const Sobre = () => {
  return (
    <LayoutBase>
      <Container>
        <PageTitle title="Sobre" borderColor="blue" />
      </Container>

      <Container>
        <Accordion />
      </Container>
      <TextContainer>
        <article>
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
        </article>
        <article>
          <h2>Minha trilha na programação</h2>
          <p>
            Em 2020, comecei a estudar algoritmos e estrutura de dados pelo
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
            <strong>JavaScript</strong>. Passei alguns meses estudando essas
            tecnologias e foi no meio desse caminho que conheci{" "}
            <strong>GIT</strong> e comecei a criar os repositórios dos meus
            projetos de estudo.
          </p>
          <br />
          <p>
            Pouco tempo depois adquiri os cursos da{" "}
            <LinkButton
              href="https://www.origamid.com/"
              textContent="Origamid"
            />{" "}
            e comecei a fazer o curso de <strong>ES6+</strong>, que me ensinou
            muito, mas na minha visão, ainda era muito pouco. Após finalizar o
            curso, fiquei um pouco perdido e sem saber o que estudar na
            sequencia.
          </p>
          <br />
          <p>
            Nessa época, o trabalho me consumia mais do que eu gostaria, os
            estudos não evoluíam, e eu me sentia bastante perdido... Até que,
            voilà! Estava pronta a receita para me fazer, mais uma vez,
            desistir. Mas não por muito tempo, só até eu conseguir me organizar
            melhor com o trabalho. Perto do final de 2021 eu retornei aos
            estudos, dessa vez focado em aprender{" "}
            <LinkButton href="https://pt-br.reactjs.org/" textContent="React" />
            .
          </p>
          <br />
          <p>
            Em 2022, me matriculei na faculdade e passei a me dedicar de verdade
            nos estudos. Terminei o curso de <strong>React</strong>, comecei
            fazer os meus próprios projetos e a coloca-los no github, aprendi um
            pouco sobre o framework{" "}
            <LinkButton href="https://nextjs.org/" textContent="Next.js" /> e os
            conceitos de <strong>SSR (Server Side Rendering)</strong>, comecei
            os estudos em{" "}
            <LinkButton
              href="https://www.typescriptlang.org/"
              textContent="TypeScript"
            />{" "}
            e{" "}
            <LinkButton
              href="https://styled-components.com/"
              textContent="Styled-components"
            />
            , com os quais sigo firme até então.
          </p>
          <br />
          <p>E por fim, cá estou eu, ansioso para fazer parte da equipe.</p>
        </article>
      </TextContainer>
    </LayoutBase>
  );
};

export default Sobre;
