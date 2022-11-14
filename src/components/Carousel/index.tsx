import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { CarouselItem } from "./CarouselItem";
import { carouselData } from "../../data/carouselData";

import "swiper/css";
import "swiper/css/pagination";
import { Container } from "./styles";

export const Carousel = () => {
  return (
    <Container>
      <Swiper pagination={true} modules={[Pagination]}>
        {carouselData.map((item, index) => (
          <SwiperSlide key={index}>
            <CarouselItem data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
