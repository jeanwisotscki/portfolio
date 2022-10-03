import React from "react";
import Link from "next/link";
import Image from "next/image";

import type { NextPage } from "next";

import LinkButton from "../components/LinkButton";
import { LayoutBase } from "../components/LayoutBase";
import { ThemeContext } from "../contexts/ThemeContext";

import {
  Container,
  Stacks,
  Description,
  Header,
  Presentation,
  SeeMoreContainer,
} from "./styles";

const Home: NextPage = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <LayoutBase>
      <Container>
        <Header>
          <Presentation>
            <span>Olá 👋</span>
            <div>
              <span>eu sou </span>
              <strong>Jean Wisotscki</strong>
            </div>
          </Presentation>
          <Stacks>
            React | Next.js | TypeScript | JavaScript | Styled-components |
            SASS/SCSS
          </Stacks>
        </Header>

        <Description>
          <p>
            Desenvolvedor front-end em formação, estudante de Análise e
            Desenvolvimento de Sistemas e apaixonado por tecnologia.
          </p>
          <p>
            Sinta-se a vontade para conferir os meus{" "}
            <LinkButton href="/projetos" textContent="projetos" />, a seção{" "}
            <LinkButton href="/sobre" textContent="sobre" /> ou, se preferir, ir
            direto para <LinkButton href="/contato" textContent="contato" />.
          </p>
        </Description>

        <Link href={"/sobre"}>
          <SeeMoreContainer>
            <a>Veja mais sobre mim</a>
            <Image
              src={
                theme === "light"
                  ? "/svgs/arrow-black.svg"
                  : "/svgs/arrow-white.svg"
              }
              width={15}
              height={15}
              alt="arrow icon"
            />
          </SeeMoreContainer>
        </Link>
      </Container>
    </LayoutBase>
  );
};

export default Home;
