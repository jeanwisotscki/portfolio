import React from "react";
import Image from "next/image";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { CarouselItem } from "./CarouselItem";
import { carouselData } from "./carouselData";

import { RedirectButton } from "../RedirectButton";

import "swiper/css";
import "swiper/css/pagination";

export const Carousel = () => {
  return (
    <div>
      <Swiper pagination={true} modules={[Pagination]}>
        {carouselData.map((item, index) => (
          <SwiperSlide key={index}>
            <CarouselItem data={item} />
          </SwiperSlide>
        ))}
      </Swiper>

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
