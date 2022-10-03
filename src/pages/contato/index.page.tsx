import Image from "next/image";

import { PageTitle } from "../../components/PageTitle";
import { LayoutBase } from "../../components/LayoutBase";
import { RedirectButton } from "../../components/RedirectButton";

import { Container, SubTitle } from "./styles";

const Contato = () => {
  return (
    <LayoutBase>
      <PageTitle title="Contato" borderColor="red" />
      <SubTitle>Curtiu o meu trabalho ou quer conversar comigo?</SubTitle>

      <Container>
        <RedirectButton
          href="https://www.linkedin.com/in/jean-wisotscki/"
          color="red"
          icon={
            <Image
              src={"/svgs/linkedin-icon.svg"}
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
          color="red"
          icon={
            <Image
              src={"/svgs/github-icon.svg"}
              width={50}
              height={50}
              alt="github icon"
            />
          }
        >
          github
        </RedirectButton>
      </Container>
    </LayoutBase>
  );
};

export default Contato;
