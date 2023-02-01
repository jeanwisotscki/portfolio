import React from "react";
import Head from "next/head";

import * as Atom from "./styles";
import * as Comp from "../../components";

const Sobre = () => {
  return (
    <>
      <Head>
        <title>Jean Wisotscki | Sobre</title>
      </Head>
      <Comp.LayoutBase>
        <Comp.PageTitle title="Sobre" borderColor="blue" />

        <Atom.TextContainer>
          <h2>Jean Wisotscki</h2>
          <p>
            Estudante de Análise e Desenvolvimento de Sistemas pela UNINTER, em
            busca da primeira oportunidade profissional na area.
          </p>
          <br />
          <p>
            Atualmente tenho focado os meus estudos na parte front-end, mais
            precisamente em{" "}
            <Comp.LinkButton href="https://nextjs.org/" textContent="Next.js" />
            ,{" "}
            <Comp.LinkButton
              href="https://www.typescriptlang.org/"
              textContent="TypeScript"
            />{" "}
            e{" "}
            <Comp.LinkButton
              href="https://styled-components.com/"
              textContent="Styled-components"
            />
            .
          </p>
          <br />
        </Atom.TextContainer>

        <Atom.Container>
          <Comp.Accordion />
        </Atom.Container>

        <Atom.TextContainer>
          <h2>Minha trilha na programação</h2>
          <p>
            Em 2020 comecei a estudar algoritmos e estrutura de dados pelo
            youtube, por incentivo de um amigo. Poucos dias após iniciar os
            estudos, achei que aquilo não era pra mim e logo desisti. Fiquei um
            tempo sem estudar absolutamente nada sobre programação, mas em 2021
            eu resolvi voltar e tentar de novo. Após uma breve busca no youtube,
            encontrei o canal{" "}
            <Comp.LinkButton
              href="https://www.youtube.com/c/CursoemV%C3%ADdeo"
              textContent="Curso em Video"
            />{" "}
            e tive meu primeiro contato com <strong>Python</strong> e lógica de
            programação.
          </p>
          <br />
          <p>
            Estudei lógica de programação com <strong>Python</strong> por alguns
            meses, até que comecei a sentir a necessidade de algo mais
            &quot;palpável&quot; ou que pelo menos fizesse mais sentido para
            mim. Nesse momento, eu conheci a trindade do desenvolvimento
            front-end: <strong>HTML</strong>, <strong>CSS</strong> e{" "}
            <strong>JavaScript</strong>. Passei alguns meses estudando essas
            tecnologias, e no meio desse caminho conheci <strong>GIT</strong> e
            comecei a criar os repositórios dos meus projetos de estudo no{" "}
            <strong>GitHub</strong>.
          </p>
          <br />
          <p>
            Pouco tempo depois, adquiri os cursos da{" "}
            <Comp.LinkButton
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
            estudos, e dessa vez focado em aprender{" "}
            <Comp.LinkButton
              href="https://pt-br.reactjs.org/"
              textContent="React"
            />
            .
          </p>
          <br />
          <p>
            Em 2022, me matriculei na faculdade e passei a me dedicar de verdade
            nos estudos. Terminei o curso de <strong>React</strong>, comecei
            fazer os meus próprios projetos e a coloca-los no{" "}
            <strong>GitHub</strong>, iniciei os estudos no framework{" "}
            <Comp.LinkButton href="https://nextjs.org/" textContent="Next.js" />{" "}
            e entendi um pouco mais sobre os conceitos de{" "}
            <strong>SSR (Server Side Rendering)</strong>. Também comecei os
            estudos em{" "}
            <Comp.LinkButton
              href="https://www.typescriptlang.org/"
              textContent="TypeScript"
            />{" "}
            e{" "}
            <Comp.LinkButton
              href="https://styled-components.com/"
              textContent="Styled-components"
            />
            , com os quais sigo firme até então.
          </p>
          <br />
          <p>
            E por fim, cá estou eu, ansioso para podermos conversar mais. 😄
          </p>
        </Atom.TextContainer>
      </Comp.LayoutBase>
    </>
  );
};

export default Sobre;
