import React from "react";

import { data } from "./data";
import { AccordionItem } from "./AccordionItem";

export const Accordion = () => {
  return (
    <div>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
};
