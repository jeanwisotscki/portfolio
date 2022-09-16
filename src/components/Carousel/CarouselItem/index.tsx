import Link from "next/link";
import React from "react";

import {
  CardDescription,
  CardTitle,
  CardWrapper,
  ImgWrapper,
  TextsWrapper,
} from "./styles";

interface CardInfos {
  title: String;
  thumbnail: String;
  description: String;
}

interface CarouselItemProps {
  data: CardInfos;
}

export const CarouselItem = ({ data }: CarouselItemProps) => {
  return (
    <a
      href={"https://github.com/jeanwisotscki/"}
      rel="noreferrer"
      target="_blank"
    >
      <CardWrapper>
        <ImgWrapper>{data.thumbnail}</ImgWrapper>

        <TextsWrapper>
          <CardTitle>
            <span>./</span> {data.title}
          </CardTitle>

          <CardDescription>
            <p>{data.description}</p>
          </CardDescription>
        </TextsWrapper>
      </CardWrapper>
    </a>
  );
};
