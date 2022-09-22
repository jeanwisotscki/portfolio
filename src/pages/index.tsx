import type { NextPage } from "next";

import { LayoutBase } from "../components/LayoutBase";

import {
  Container,
  Stacks,
  DescriptionWrapper,
  Header,
  Presentation,
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
        </DescriptionWrapper>
        <p>Leia mais sobre mim</p>
      </Container>
    </LayoutBase>
  );
};

export default Home;
