import type { NextPage } from "next";
import { Header } from "../components/Header";

import { Espace, Title } from "./styles";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Espace />
    </div>
  );
};

export default Home;
