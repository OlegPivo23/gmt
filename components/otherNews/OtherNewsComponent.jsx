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
    <div className="flex flex-col gap-[25px] px-[20px] md:px-[81px]">
      <div className="flex flex-col items-start md:flex-row ">
        <div className="flex items-center w-full ">
          <TitleComponent>Остальные новости</TitleComponent>
        </div>
        <ShowButton onClick={handleShowAllClick}>Показать все</ShowButton>
      </div>

      <div className=" py-[43px] relative">
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
                  maxWidth="458px"
                  maxHeight="322px"
                  width="100%"
                  height="100%"
                  bgImage={card.bgImage}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Кастомные стрелки */}
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
  );
}
