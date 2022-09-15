import React from "react";

import { accordionData } from "./data";
import { AccordionItem } from "./AccordionItem";

export const Accordion = () => {
  return (
    <div>
      {accordionData.map((item, index) => (
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
