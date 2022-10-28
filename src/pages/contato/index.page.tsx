import Head from "next/head";
import Image from "next/image";

import { PageTitle } from "../../components/PageTitle";
import { LayoutBase } from "../../components/LayoutBase";
import { RedirectButton } from "../../components/RedirectButton";

import * as Atom from "./styles";

const Contato = () => {
  return (
    <>
      <Head>
        <title>Jean Wisotscki | Contato</title>
      </Head>
      <LayoutBase>
        <PageTitle title="Contato" borderColor="red" />
        <Atom.SubTitle>
          Curtiu o meu trabalho ou quer conversar comigo?
        </Atom.SubTitle>

        <Atom.Container>
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
        </Atom.Container>
      </LayoutBase>
    </>
  );
};

export default Contato;
