import React from "react";

import * as Atom from "./styles";

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
      <Atom.CardWrapper>
        <Atom.ImgWrapper thumbnail={data.thumbnail}></Atom.ImgWrapper>

        <Atom.TextsWrapper>
          <Atom.CardTitle>
            <span>./</span> {data.title}
          </Atom.CardTitle>

          <Atom.CardDescription>
            <p>{data.description}</p>
          </Atom.CardDescription>
        </Atom.TextsWrapper>
      </Atom.CardWrapper>
    </a>
  );
};
