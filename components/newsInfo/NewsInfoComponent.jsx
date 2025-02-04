"use client";

import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { newsData } from "@/db/newsData";
import "./newsInfo.scss";
import NavigationArrowComponent from "../UI/navigationArrow/NavigationArrowComponent";
import { useRef, useState } from "react";

export default function NewsInfoComponent() {
  const params = useParams();
  const id = params.id ? Number(params.id) : null;

  const news = newsData.find((item) => item.id === id);
  if (!news) return <p>Новость не найдена</p>;

  const swiperRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(news[0]);
  const [bgLoaded, setBgLoaded] = useState(false);

  return (
    <div className="border-2 border-opacity-25 border-black bg-white px-4 md:px-[41px] py-6 md:py-[51px] mx-4 relative mb-6">
      <div className="absolute top-4 md:top-[50px] right-4 md:right-[50px] flex items-center">
        <img src="/img/news/calendar.png" alt="Календарь" />
        <span className="p-2 md:p-4 font-medium text-[12px] md:text-[15px] text-black">
          {news.date}
        </span>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-[60px] relative">
        <div className="flex-1 w-full lg:max-w-[50%] relative">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: `.swiper-pagination-${id}`,
              type: "bullets",
            }}
            loop={true}
          >
            {news.images.map((image, i) => (
              <SwiperSlide key={i}>
                <img
                  src={image}
                  alt={`Изображение ${i + 1}`}
                  className="object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Кастомные кнопки навигации */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-12 md:-left-12 hidden md:block">
            <NavigationArrowComponent
              direction="left"
              className="w-8 h-8 md:w-12 md:h-12"
              onClick={() => swiperRef.current?.slidePrev()}
            />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-12 md:-right-20 hidden md:block">
            <NavigationArrowComponent
              direction="right"
              className="w-8 h-8 md:w-12 md:h-12"
              onClick={() => swiperRef.current?.slideNext()}
            />
          </div>

          <div
            className={`swiper-pagination swiper-pagination-${id} mt-4 flex justify-center space-x-2`}
          ></div>
        </div>

        <div className="flex-1 w-full lg:max-w-[50%]">
          <h2 className="font-extrabold text-[24px] md:text-[36px] text-black max-w-[534px] w-full">
            {news.title}
          </h2>
          <div className="flex flex-col gap-4 mt-4">
            {news.fullDescription.map((paragraph, i) => (
              <p
                key={i}
                className="font-bold text-[12px] md:text-[15px] text-black"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
