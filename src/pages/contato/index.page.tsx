import Head from "next/head";
import Image from "next/image";

import * as Atom from "./styles";
import * as Comp from "../../components";

const Contato = () => {
  return (
    <>
      <Head>
        <title>Jean Wisotscki | Contato</title>
      </Head>
      <Comp.LayoutBase>
        <Comp.PageTitle title="Contato" borderColor="red" />
        <Atom.SubTitle>
          Curtiu o meu trabalho ou quer conversar comigo?
        </Atom.SubTitle>

        <Atom.Container>
          <Comp.RedirectButton
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
          </Comp.RedirectButton>

          <Comp.RedirectButton
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
          </Comp.RedirectButton>
        </Atom.Container>
      </Comp.LayoutBase>
    </>
  );
};

export default Contato;
