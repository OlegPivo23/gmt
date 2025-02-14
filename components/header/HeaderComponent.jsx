"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import HeaderTopNav from "./headerTop/HeaderTopNav";
import style from "./header.module.scss";
import NavigationArrowComponent from "../UI/navigationArrow/NavigationArrowComponent";
import HeaderBottomNav from "./headerTop/HeaderBottomNav";
import "swiper/css";
import "swiper/css/navigation";
import { slides, headerTopLinks, headerBottomLinks, headerLinks } from "../../db/headerInfo";

export default function Header() {
  const swiperRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(slides[0].imageUrl);
  const [bgLoaded, setBgLoaded] = useState(false);

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
        {/* <div className="hidden lg:block">
          <HeaderTopNav links={headerTopLinks} />
        </div> */}
        <HeaderBottomNav links={headerBottomLinks} />
      </div>

      <div className="hidden md:block w-auto h-auto">
        <NavigationArrowComponent
          direction="left"
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <NavigationArrowComponent
          direction="right"
          onClick={() => swiperRef.current?.slideNext()}
        />
      </div>

      <div className="px-6 sm:px-8 mt-6 lg:px-12 xl:pl-[89px] lg:max-w-[758px] mb-12 lg:mb-[90px] relative">
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
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
