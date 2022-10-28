import React from "react";
import Image from "next/image";

import * as Atom from "./styles";

interface AccordionItemProps {
  index: number;
  answer: string;
  question: string;
}

export const AccordionItem = (props: AccordionItemProps) => {
  const [showAnswer, setShowAnswer] = React.useState<null | number>(null);

  const toggle = (index: number) => {
    // esconde a resposta ao clicar, caso ela esteja visível
    if (showAnswer === index) return setShowAnswer(null);

    setShowAnswer(index);
  };

  return (
    <>
      <Atom.QuestionWrapper onClick={() => toggle(props.index)}>
        <Atom.Question>{props.question}</Atom.Question>
        <Atom.IconWrapper>
          {showAnswer !== null && showAnswer >= 0 ? (
            <Image
              src="/svgs/arrow-up.svg"
              width={25}
              height={25}
              alt="arrow up icon"
            />
          ) : (
            <Image
              src="/svgs/arrow-down.svg"
              width={25}
              height={25}
              alt="arrow down icon"
            />
          )}
        </Atom.IconWrapper>
      </Atom.QuestionWrapper>
      {showAnswer === props.index ? (
        <Atom.AnswerWrapper>
          <p>{props.answer}</p>
        </Atom.AnswerWrapper>
      ) : null}
    </>
  );
};
