"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

export default function SwiperComponent({
  slides = [],
  spaceBetween = 50,
  slidesPerView = 3,
  navigation = true,
  pagination = { clickable: true },
  scrollbar = { draggable: true },
  autoplay = false,
  effect = "slide",
  loop = false,
  className = "",
  slideClassName = "",
}) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectFade]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation={navigation}
      pagination={pagination}
      scrollbar={scrollbar}
      autoplay={autoplay ? { delay: 3000 } : false}
      effect={effect}
      loop={loop}
      className={className}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className={slideClassName}>
          {slide}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
