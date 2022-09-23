import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { LayoutBase } from "../components/LayoutBase";

import {
  Container,
  Stacks,
  DescriptionWrapper,
  Header,
  Presentation,
  SeeMoreContainer,
} from "./styles";

const Home: NextPage = () => {
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
        <DescriptionWrapper>
          <p>
            Desenvolvedor front-end em formação, estudante de Análise e
            Desenvolvimento de Sistemas e apaixonado por tecnologia.
          </p>
          <br />
          <p>
            Sinta-se a vontade para conferir os meus{" "}
            <Link href={"/projetos"}>projetos</Link>
          </p>
        </DescriptionWrapper>
        <Link href={"/sobre"}>
          <SeeMoreContainer>
            <a>Veja mais sobre mim</a>
            <Image
              src="/arrow-right.svg"
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
