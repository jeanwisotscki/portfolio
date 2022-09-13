import Image from "next/image";
import type { NextPage } from "next";

import { LayoutBase } from "../components/LayoutBase";

import { Container, ImgWrapper, TextWrapper } from "./styles";

const Home: NextPage = () => {
  return (
    <LayoutBase>
      <Container>
        <ImgWrapper>
          <Image
            src="/home-decoration.svg"
            width={250}
            height={250}
            alt="decoration"
          />
        </ImgWrapper>
        <TextWrapper>
          <h1>Bem vindos</h1>
          <h2>ao meu portfólio</h2>
        </TextWrapper>
      </Container>
    </LayoutBase>
  );
};

export default Home;
