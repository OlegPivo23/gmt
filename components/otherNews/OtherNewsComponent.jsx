"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { useRouter } from "next/navigation";

import CardComponent from "../cards/CardComponent";
import NavigationArrowComponent from "../UI/navigationArrow/NavigationArrowComponent";
import TitleComponent from "../UI/title/TitleComponent";
import { newsData } from "@/db/newsData";
import ShowButton from "../UI/button/ShowButtonComponent";

export default function OtherNewsComponent() {
  const router = useRouter();
  const swiperRef = useRef(null);

  const handlePrev = () => swiperRef.current?.swiper.slidePrev();
  const handleNext = () => swiperRef.current?.swiper.slideNext();

  const handleShowAllClick = () => router.push("/all-news");

  const handleCardClick = (card) => {
    router.push(
      `/news/${card.id}?title=${encodeURIComponent(
        card.title
      )}&description=${encodeURIComponent(
        card.description
      )}&bgImage=${encodeURIComponent(card.bgImage)}`
    );
  };

  return (
    <div className="flex flex-col gap-4 px-[20px] md:px-[81px]">
      <div className="flex justify-center">
        <TitleComponent>Остальные новости</TitleComponent>
      </div>

      <div className=" relative">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
        >
          {newsData.map((card) => (
            <SwiperSlide key={card.id}>
              <div
                onClick={() => handleCardClick(card)}
                className="cursor-pointer"
              >
                <CardComponent
                  title={card.title}
                  description={card.description}
                  hasGradient="true"
                  className=" w-[390px]  h-[390px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div onClick={handlePrev}>
          <NavigationArrowComponent
            direction="left"
            className="pointer-events-auto z-10 left-[-25px]"
          />
        </div>
        <div onClick={handleNext}>
          <NavigationArrowComponent
            direction="right"
            className="right-[-25px] pointer-events-auto z-10"
          />
        </div>
      </div>
      {/* Кастомные стрелки */}
    </div>
  );
}
