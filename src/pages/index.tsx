import type { NextPage } from "next";
import { Header } from "../components/Header";

import { Title } from "./styles";

const Home: NextPage = () => {
  return (
    <div>
      <Title>olá</Title>
      <Header />
    </div>
  );
};

export default Home;
