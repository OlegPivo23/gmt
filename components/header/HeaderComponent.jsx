"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import HeaderTopNav from "./headerTop/HeaderTopNav";
import style from "./header.module.scss";
import NavigationArrowComponent from "../UI/navigationArrow/NavigationArrowComponent";
import HeaderBottomNav from "./headerTop/HeaderBottomNav";

const texts = [
  {
    title: "Создаем будущее своими руками",
    description:
      "Директор ГМТ Давид Бирагов принял участие в форуме среднего профессионального образования, организатором которого выступает Министерство просвещения России при поддержке Правительства Калужской области.",
  },
  {
    title: "Другой заголовок",
    description: "Другое описание для второго слайда.",
  },
  {
    title: "Еще один заголовок",
    description: "Еще одно описание для третьего слайда.",
  },
];

const headerTopLinks = [
  { name: "Абитуриентам", link: "/applicants" },
  { name: "О техникуме", link: "/about" },
  { name: "Студентам", link: "/students" },
  { name: "Методическая работа", link: "/methodical" },
];

const headerBottomLinks = [
  { name: "Поступление", link: "/entrance" },
  { name: "Образование", link: "/education" },
  { name: "Документы", link: "/documents" },
  { name: "Руководство", link: "/guide" },
]; 

export default function Header() {
  const swiperRef = React.useRef(null);

  return (
    <header className={style.header}>
      <div>
        <HeaderTopNav links={headerTopLinks} />
        <HeaderBottomNav links={headerBottomLinks} />{" "}
      </div>

      <div className="hidden md:block">
        <NavigationArrowComponent
          direction="left"
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <NavigationArrowComponent
          direction="right"
          onClick={() => swiperRef.current?.slideNext()}
        />
      </div>

      <div className="px-6 sm:px-8 lg:px-12 xl:pl-[89px] lg:max-w-[758px] mb-12 lg:mb-[90px] relative">
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
        >
          {texts.map((text, index) => (
            <SwiperSlide key={index}>
              <h2 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white text-shadow">
                {text.title}
              </h2>
              <p className="font-semibold text-base sm:text-lg lg:text-xl text-white text-shadow mt-4">
                {text.description}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </header>
  );
}
