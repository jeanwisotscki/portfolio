import React from "react";

import {
  CardDescription,
  CardTitle,
  CardWrapper,
  ImgWrapper,
  TextsWrapper,
} from "./styles";

interface CardInfos {
  href: string;
  title: string;
  thumbnail: any;
  description: string;
}

interface CarouselItemProps {
  data: CardInfos;
}

export const CarouselItem = ({ data }: CarouselItemProps) => {
  return (
    <a href={data.href} rel="noreferrer" target="_blank">
      <CardWrapper>
        <ImgWrapper thumbnail={data.thumbnail}></ImgWrapper>

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
