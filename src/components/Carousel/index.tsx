import React from "react";
import Image from "next/image";

import { carouselData } from "./carouselData";
import { CarouselItem } from "./CarouselItem";

import { RedirectButton } from "../RedirectButton";

import { SelectorsWrapper } from "./styles";

export const Carousel = () => {
  return (
    <div>
      {carouselData.map((item, index) => (
        <CarouselItem key={index} data={item} />
      ))}
      <SelectorsWrapper>
        <p>seletores</p>
      </SelectorsWrapper>
      <RedirectButton
        href="https://github.com/jeanwisotscki/"
        icon={
          <Image
            src={"/github-icon.svg"}
            width={50}
            height={50}
            alt="github icon"
          />
        }
      >
        veja mais
      </RedirectButton>
    </div>
  );
};
