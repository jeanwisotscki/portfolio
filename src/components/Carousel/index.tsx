import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { CarouselItem } from "./CarouselItem";

import { RedirectButton } from "../RedirectButton";

import "swiper/css";
import { SelectorsWrapper } from "./styles";
import { carouselData } from "./carouselData";

export const Carousel = () => {
  return (
    <div>
      <Swiper>
        {carouselData.map((item, index) => (
          <SwiperSlide key={index}>
            <CarouselItem data={item} />
          </SwiperSlide>
        ))}
      </Swiper>

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
