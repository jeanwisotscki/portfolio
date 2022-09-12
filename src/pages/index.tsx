import Image from "next/image";
import type { NextPage } from "next";

import { LayoutBase } from "../components/LayoutBase";

import { Container } from "./styles";

const Home: NextPage = () => {
  return (
    <LayoutBase>
      <Container>
        <Image
          src="/home-decoration.svg"
          width={250}
          height={250}
          alt="decoration"
        />
        <div>
          <h1>Bem vindos</h1>
          <h2>ao meu portfólio</h2>
        </div>
      </Container>
    </LayoutBase>
  );
};

export default Home;
