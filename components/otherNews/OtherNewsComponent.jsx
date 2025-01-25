"use client"; // Указываем, что это клиентский компонент

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Импортируем модуль Navigation
import "swiper/css"; // Основные стили Swiper
import "swiper/css/navigation"; // Стили для навигации
import { useRef } from "react"; // Используем useRef для доступа к Swiper API

import CardComponent from "../cards/CardComponent";
import NavigationArrowComponent from "../UI/navigationArrow/NavigationArrowComponent";
import TitleComponent from "../UI/title/TitleComponent";
import { useNavigation } from "../../hooks/useNavigation"; // Импортируем кастомный хук

const cards = [
  {
    id: 1, // Добавляем уникальный ID для каждой новости
    title: "Заголовок новости 1",
    description: "Описание новости 1",
    bgImg: "/img/news/card-bg.png",
  },
  {
    id: 2,
    title: "Заголовок новости 2",
    description: "Описание новости 2",
    bgImg: "/img/news/card-bg.png",
  },
  {
    id: 3,
    title: "Заголовок новости 3",
    description: "Описание новости 3",
    bgImg: "/img/news/card-bg.png",
  },
  {
    id: 4,
    title: "Заголовок новости 4",
    description: "Описание новости 4",
    bgImg: "/img/news/card-bg.png",
  },
  {
    id: 5,
    title: "Заголовок новости 5",
    description: "Описание новости 5",
    bgImg: "/img/news/card-bg.png",
  },
];

export default function OtherNewsComponent() {
  const navigateTo = useNavigation(); // Используем кастомный хук
  const swiperRef = useRef(null); // Используем useRef для доступа к Swiper API

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev(); // Переключение на предыдущий слайд
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext(); // Переключение на следующий слайд
    }
  };

  // Обработчик клика по карточке
  const handleCardClick = (card) => {
    navigateTo(`/news/${card.id}`, {
      title: card.title,
      description: card.description,
      bgImg: card.bgImg,
    });
  };

  return (
    <div>
      <div className="flex justify-center">
        <TitleComponent>Остальные новости</TitleComponent>
      </div>
      <div className="px-[81px] py-[43px] relative">
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
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          loop={true}
        >
          {cards.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                onClick={() => handleCardClick(item)} // Добавляем обработчик клика
                className="cursor-pointer" // Делаем карточку кликабельной
              >
                <CardComponent
                  title={item.title}
                  description={item.description}
                  maxWidth="450px"
                  bgImage={item.bgImg}
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
