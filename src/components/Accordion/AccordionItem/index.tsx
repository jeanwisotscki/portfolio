import React from "react";
import { Answer, Question, Wrapper } from "./styles";

interface AccordionItemProps {
  question: string;
  answer: string;
  index: number;
}

export const AccordionItem = (props: AccordionItemProps) => {
  const [isActive, setIsActive] = React.useState<null | number>(null);

  const toggle = (index: number) => {
    // esconde a resposta, caso ela esteja visível
    if (isActive === index) return setIsActive(null);

    setIsActive(index);
  };

  return (
    <Wrapper>
      <Question onClick={() => toggle(props.index)}>{props.question}</Question>
      {isActive === props.index ? <Answer>{props.answer}</Answer> : null}
    </Wrapper>
  );
};
