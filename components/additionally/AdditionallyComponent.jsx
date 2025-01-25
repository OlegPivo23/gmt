"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CardComponent from "../cards/CardComponent";
import NavigationArrowComponent from "../UI/navigationArrow/NavigationArrowComponent";
import TitleComponent from "../UI/title/TitleComponent";
import { useRef } from "react";

const cards = [
  "/img/news/card-bg.png",
  "/img/news/card-bg.png",
  "/img/news/card-bg.png",
  "/img/news/card-bg.png",
  "/img/news/card-bg.png",
];

export function AdditionallyComponent() {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="flex flex-col gap-[25px]">
      <TitleComponent>Дополнительно</TitleComponent>
      <div className="border border-[rgba(0,0,0,0.25)] rounded-[30px]">
        <div className="px-[81px] py-[43px] relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={3}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop={true}
          >
            {cards.map((item, i) => (
              <SwiperSlide key={i}>
                <CardComponent maxWidth="380px" bgImage={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <div onClick={handlePrev} className="pointer-events-auto">
              <NavigationArrowComponent direction="left" />
            </div>
            <div onClick={handleNext} className="pointer-events-auto">
              <NavigationArrowComponent direction="right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
