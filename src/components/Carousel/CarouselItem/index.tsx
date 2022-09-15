import React from "react";

import {
  CardDescription,
  CardTitle,
  CardWrapper,
  ImgWrapper,
  TextsWrapper,
} from "./styles";

interface CardInfos {
  thumbnail: String;
  title: String;
  description: String;
}

interface CarouselItemProps {
  data: CardInfos;
}

export const CarouselItem = ({ data }: CarouselItemProps) => {
  return (
    <CardWrapper>
      <a
        href={"https://github.com/jeanwisotscki/"}
        rel="noreferrer"
        target="_blank"
      >
        <ImgWrapper>{data.thumbnail}</ImgWrapper>
        <TextsWrapper>
          <CardTitle>
            <span>./</span> {data.title}
          </CardTitle>
          <CardDescription>
            <p>{data.description}</p>
          </CardDescription>
        </TextsWrapper>
      </a>
    </CardWrapper>
  );
};
