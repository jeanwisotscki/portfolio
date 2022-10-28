import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import type { NextPage } from "next";

import { LinkButton } from "../components/LinkButton";
import { LayoutBase } from "../components/LayoutBase";
import { ThemeContext } from "../contexts/ThemeContext";

import * as Atom from "./styles";

const Home: NextPage = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <>
      <Head>
        <title>Jean Wisotscki | Home</title>
      </Head>
      <LayoutBase>
        <Atom.Container>
          <Atom.Header>
            <Atom.Presentation>
              <span>Olá 👋</span>
              <div>
                <span>eu sou </span>
                <strong>Jean Wisotscki</strong>
              </div>
            </Atom.Presentation>
            <Atom.Stacks>
              React | Next.js | TypeScript | JavaScript | Styled-components |
              SASS/SCSS
            </Atom.Stacks>
          </Atom.Header>

          <Atom.Description>
            <p>
              Desenvolvedor front-end em formação, estudante de Análise e
              Desenvolvimento de Sistemas e apaixonado por tecnologia.
            </p>
            <p>
              Sinta-se a vontade para conferir os meus{" "}
              <LinkButton href="/projetos" textContent="projetos" />, a seção{" "}
              <LinkButton href="/sobre" textContent="sobre" /> ou, se preferir,
              ir direto para{" "}
              <LinkButton href="/contato" textContent="contato" />.
            </p>
          </Atom.Description>

          <Link href="/sobre">
            <Atom.SeeMoreContainer>
              <span>Veja mais sobre mim</span>
              <Image
                src={
                  theme === "light"
                    ? "/svgs/arrow-black.svg"
                    : "/svgs/arrow-white.svg"
                }
                width={15}
                height={15}
                layout="fixed"
                alt="arrow icon"
              />
            </Atom.SeeMoreContainer>
          </Link>
        </Atom.Container>
      </LayoutBase>
    </>
  );
};

export default Home;
