import Image from "next/image";

import { PageTitle } from "../../components/PageTitle";
import { LayoutBase } from "../../components/LayoutBase";
import { RedirectButton } from "../../components/RedirectButton";

import { Container, SubTitle } from "./styles";

const Contato = () => {
  return (
    <LayoutBase>
      <PageTitle title="Contato" />
      <SubTitle>Curtiu o meu trabalho ou quer conversar comigo?</SubTitle>

      <Container>
        <RedirectButton
          href="https://www.linkedin.com/in/jean-wisotscki/"
          icon={
            <Image
              src={"/linkedin-icon.svg"}
              width={50}
              height={50}
              alt="linkedin icon"
            />
          }
        >
          linkedin
        </RedirectButton>

        <RedirectButton
          href="https://github.com/jeanwisotscki/"
          icon={
            <Image
              src={"/github-icon.svg"}
              width={50}
              height={50}
              alt="github icon"
            />
          }
        >
          git hub
        </RedirectButton>
      </Container>
    </LayoutBase>
  );
};

export default Contato;
