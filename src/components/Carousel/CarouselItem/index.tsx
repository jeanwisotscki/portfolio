import Link from "next/link";
import React from "react";

import {
  CardDescription,
  CardTitle,
  CardWrapper,
  ImgWrapper,
  TextsWrapper,
} from "./styles";

export const CarouselItem = () => {
  return (
    <CardWrapper>
      <a
        href={"https://github.com/jeanwisotscki/"}
        rel="noreferrer"
        target="_blank"
      >
        <ImgWrapper></ImgWrapper>
        <TextsWrapper>
          <CardTitle>
            <span>./</span> BuscaCEP-Brasil
          </CardTitle>
          <CardDescription>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur tempora dicta dolorum velit quibusdam similique!
            </p>
          </CardDescription>
        </TextsWrapper>
      </a>
    </CardWrapper>
  );
};
