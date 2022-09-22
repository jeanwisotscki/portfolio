import type { NextPage } from "next";

import { LayoutBase } from "../components/LayoutBase";

import { Container, Stacks, TextWrapper, TitleWrapper } from "./styles";

const Home: NextPage = () => {
  return (
    <LayoutBase>
      <Container>
        <TitleWrapper>
          <span>Olá 👋</span>
          <div>
            <span>eu sou </span>
            <strong>Jean Wisotscki</strong>
          </div>
        </TitleWrapper>
        <Stacks style={{ color: "#fff" }}>
          React | Next.js | TypeScript | JavaScript | Styled-components |
          SASS/SCSS
        </Stacks>
        <TextWrapper>
          <p>
            Desenvolvedor front-end em formação, estudante de Análise e
            Desenvolvimento de Sistemas e apaixonado por tecnologia.
          </p>
        </TextWrapper>
      </Container>
    </LayoutBase>
  );
};

export default Home;
