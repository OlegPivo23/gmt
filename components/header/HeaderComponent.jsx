"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import HeaderTopNav from "./headerTop/HeaderTopNav";
import style from "./header.module.scss";
import NavigationArrowComponent from "../UI/navigationArrow/NavigationArrowComponent";
import HeaderBottomNav from "./headerTop/HeaderBottomNav";

const slides = [
  {
    title: "Создаем будущее своими руками",
    description:
      "Директор ГМТ Давид Бирагов принял участие в форуме среднего профессионального образования, организатором которого выступает Министерство просвещения России при поддержке Правительства Калужской области.",
    imageUrl: "/img/header/header-bg.jpg",
  },
  {
    title: "Итоги года и перспективы развития ",
    description:
      "О главных показателях, достижениях и новых вызовах, стоящих перед ГМТ рассказал директор образовательного учреждения Давид Бирагов подводя итоги 2024 года..",
    imageUrl: "/img/header/header-bg2.jpg",
  },
  {
    title: "Содействие трудоустройству выпускников",
    description:
      "Профориентационные мероприятия провели для студентов ГМТ. Одно из них прошло на территории пивоваренного дома «Бавария», с которым техникум активно сотрудничает. .",
    imageUrl: "/img/header/header-bg3.jpg",
  },
  {
    title: "В ГМТ начнут готовить кадры для курортов Северного Кавказа",
    description:
      "Сегодня в техникуме состоялась презентация пилотного проекта образовательного кластера по подготовке профессиональных кадров для обеспечения потребностей курортов Северного Кавказа на базе ГМТ. .",
    imageUrl: "/img/header/header-bg4.jpg",
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
  const swiperRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(slides[0].imageUrl);
  const [bgLoaded, setBgLoaded] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        <div className="hidden lg:block">
          <HeaderTopNav links={headerTopLinks} />
        </div>
        <HeaderBottomNav links={(headerBottomLinks, headerTopLinks)} />

        {isMenuOpen && (
          <div className=" bg-white text-black  shadow-lg p-4 absolute top-0 left-0 right-0 z-50 ">
            <ul className="flex flex-col gap-4">
              {links?.map((item, i) => (
                <li key={i} className="list-none">
                  <Link
                    href={item.link}
                    className="block font-bold text-sm hover:text-orange-200 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
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
