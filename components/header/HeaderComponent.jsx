"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Добавляем Autoplay
import HeaderTopNav from "./headerTop/HeaderTopNav";
import style from "./header.module.scss";
import NavigationArrowComponent from "../UI/navigationArrow/NavigationArrowComponent";
import HeaderBottomNav from "./headerTop/HeaderBottomNav";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Добавляем стили для автоплея
import {
  slides,
  slidesMobile,
  headerTopLinks,
  headerBottomLinks,
  headerLinks,
} from "../../db/headerInfo";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "@/stores/newsSlice";

export default function Header() {
  const dispatch = useDispatch();
  const swiperRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(slides[0].imageUrl);
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = currentImage;
    img.onload = () => setBgLoaded(true);
  }, [currentImage]);

  return (
    <header
      className={style.header}
      style={{
        backgroundImage: bgLoaded
          ? `linear-gradient(0deg, rgba(255, 173, 91, 0.37) 0%, rgba(255, 255, 255, 0.57) 99.76%), url(${currentImage})`
          : "none",
      }}
    >
      <div>
        <HeaderBottomNav links={headerBottomLinks} />
        
      </div>

      {/* Блок для мобильных устройств (до sm) */}
      <div className="block md:hidden px-6 sm:px-8 mt-6 lg:px-12 xl:pl-[89px] lg:max-w-[758px] mb-12 lg:mb-[90px] relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]} // Добавляем Autoplay
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }} // Автоплей каждые 5 секунд
          onSlideChange={(swiper) =>
            setCurrentImage(slidesMobile[swiper.realIndex].imageUrl)
          }
        >
          {slidesMobile.map((slide, index) => (
            <SwiperSlide key={index} className={index === 0 ? "hidden" : ""}>
              <h2 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white text-shadow">
                {slide.title}
              </h2>
              <p className="font-semibold text-base sm:text-lg lg:text-xl text-white text-shadow mt-4">
                {slide.description}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Блок для десктопов (начиная с sm) */}
      <div className="hidden md:block px-6 sm:px-8 mt-6 lg:px-12 xl:pl-[89px] lg:max-w-[758px] mb-12 lg:mb-[90px] relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]} // Добавляем Autoplay
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }} // Автоплей каждые 5 секунд
          onSlideChange={(swiper) =>
            setCurrentImage(slides[swiper.realIndex].imageUrl)
          }
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <h2 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white text-shadow">
                {slide.title}
              </h2>
              <p className="font-semibold text-base sm:text-lg lg:text-xl text-white text-shadow mt-4">
                {slide.description}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </header>
  );
}
