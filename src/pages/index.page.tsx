import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import type { NextPage } from "next";

import * as Atom from "./styles";
import * as Comp from "../components";
import { ThemeContext } from "../contexts/ThemeContext";

const Home: NextPage = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <>
      <Head>
        <title>Jean Wisotscki | Home</title>
      </Head>

      <Comp.LayoutBase>
        <Atom.Container>
          <Atom.Header>
            <Atom.Presentation>
              <span>Olá 👋</span>
              <div>
                <span>eu sou </span>
                <Comp.GlitchText text="Jean Wisotscki" />
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
              <Comp.LinkButton href="/projetos" textContent="projetos" />, a
              seção <Comp.LinkButton href="/sobre" textContent="sobre" /> ou, se
              preferir, ir direto para{" "}
              <Comp.LinkButton href="/contato" textContent="contato" />.
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
      </Comp.LayoutBase>
    </>
  );
};

export default Home;
