import React from "react";
import Image from "next/image";

import { CarouselItem } from "./CarouselItem";

import { RedirectButton } from "../RedirectButton";

import { SelectorsWrapper } from "./styles";

export const Carousel = () => {
  return (
    <div>
      <CarouselItem />
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
