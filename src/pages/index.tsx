import type { NextPage } from "next";

import { LayoutBase } from "../components/LayoutBase";

import { Container, Stacks, DescriptionWrapper, TitleWrapper } from "./styles";

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
        <Stacks>
          React | Next.js | TypeScript | JavaScript | Styled-components |
          SASS/SCSS
        </Stacks>
        <DescriptionWrapper>
          <p>
            Desenvolvedor front-end em formação, estudante de Análise e
            Desenvolvimento de Sistemas e apaixonado por tecnologia.
          </p>
        </DescriptionWrapper>
      </Container>
    </LayoutBase>
  );
};

export default Home;
