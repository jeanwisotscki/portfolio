import React from "react";
import Image from "next/image";

import {
  AnswerWrapper,
  Question,
  QuestionWrapper,
  IconWrapper,
} from "./styles";

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
      <QuestionWrapper onClick={() => toggle(props.index)}>
        <Question>{props.question}</Question>
        <IconWrapper>
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
        </IconWrapper>
      </QuestionWrapper>
      {showAnswer === props.index ? (
        <AnswerWrapper>
          <p>{props.answer}</p>
        </AnswerWrapper>
      ) : null}
    </>
  );
};
