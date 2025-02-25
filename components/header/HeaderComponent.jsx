"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import HeaderTopNav from "./headerTop/HeaderTopNav";
import style from "./header.module.scss";
import NavigationArrowComponent from "../UI/navigationArrow/NavigationArrowComponent";
import HeaderBottomNav from "./headerTop/HeaderBottomNav";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
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
  const [currentImageMobile, setCurrentImageMobile] = useState(
    slidesMobile[0].imageUrl
  );
  const [currentImageDesktop, setCurrentImageDesktop] = useState(
    slides[0].imageUrl
  );
  const [bgLoaded, setBgLoaded] = useState(false);

  const currentImage =
    typeof window !== "undefined" && window.innerWidth < 768
      ? currentImageMobile
      : currentImageDesktop;

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
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          onSlideChange={(swiper) =>
            setCurrentImageMobile(slidesMobile[swiper.realIndex].imageUrl)
          }
        >
          {slidesMobile.map((slide, index) => (
            <SwiperSlide key={index} className={index === 0 ? "hidden" : ""}>
              <h2 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white text-shadow">
                {slide.title}
              </h2>
              <p className="font-semibold text-base sm:text-lg lg:text-xl text-white text-shadow mt-4 ">
                {slide.description}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Блок для десктопов (начиная с sm) */}
      <div className="hidden md:block px-6 sm:px-8 mt-6 lg:px-12 xl:pl-[89px] lg:max-w-[758px] mb-12 lg:mb-[90px] relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={20}
          onSlideChange={(swiper) =>
            setCurrentImageDesktop(slides[swiper.realIndex].imageUrl)
          }
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className={index === 0 ? style.firstSlide : ""}
            >
              <div
                className={
                  index === 0
                    ? "flex flex-col justify-end items-center h-full  fixed w-full "
                    : ""
                }
              >
                <h2 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white text-shadow">
                  {slide.title}
                </h2>
                <p className="font-semibold text-base sm:text-lg lg:text-xl text-white text-shadow mt-4 pr-10">
                  {slide.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </header>
  );
}
