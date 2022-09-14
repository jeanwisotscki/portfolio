import React from "react";

import {
  Answer,
  Question,
  Container,
  QuestionWrapper,
  IconWrapper,
} from "./styles";

const ArrowDownIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

const ArrowUpIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
      />
    </svg>
  );
};

interface AccordionItemProps {
  question: string;
  answer: string;
  index: number;
}

export const AccordionItem = (props: AccordionItemProps) => {
  const [showAnswer, setShowAnswer] = React.useState<null | number>(null);

  const toggle = (index: number) => {
    // esconde a resposta, caso ela esteja visível
    if (showAnswer === index) return setShowAnswer(null);

    setShowAnswer(index);
  };

  return (
    <Container>
      <QuestionWrapper onClick={() => toggle(props.index)}>
        <Question>{props.question}</Question>
        <IconWrapper>
          {showAnswer !== null && showAnswer >= 0 ? (
            <ArrowUpIcon />
          ) : (
            <ArrowDownIcon />
          )}
        </IconWrapper>
      </QuestionWrapper>
      {showAnswer === props.index ? <Answer>{props.answer}</Answer> : null}
    </Container>
  );
};
