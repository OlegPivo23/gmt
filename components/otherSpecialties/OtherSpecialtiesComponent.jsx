"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { useNavigation } from "../../hooks/useNavigation";

import CardComponent from "../cards/CardComponent";
import NavigationArrowComponent from "../UI/navigationArrow/NavigationArrowComponent";
import TitleComponent from "../UI/title/TitleComponent";

const specialities = [
  {
    id: 1,
    title: "Земельно-имущественные отношения​",
    description: "Описание специальности",
    bgImage: "/img/news/card-bg.png",
  },
  {
    id: 2,
    title: "Земельно-имущественные отношения2​",
    description: "Описание специальности",
    bgImage: "/img/news/card-bg.png",
  },
  {
    id: 3,
    title: "Земельно-имущественные отношения3​",
    description: "Описание специальности",
    bgImage: "/img/news/card-bg.png",
  },
  {
    id: 4,
    title: "Земельно-имущественные отношения4​",
    description: "Описание специальности",
    bgImage: "/img/news/card-bg.png",
  },
  {
    id: 5,
    title: "Земельно-имущественные отношения5​",
    description: "Описание специальности",
    bgImage: "/img/news/card-bg.png",
  },
];

export default function OtherSpecialtiesComponent() {
  const swiperRef = useRef(null);
  const navigateTo = useNavigation();

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

  const handleCardClick = (speciality) => {
    navigateTo(`/specialties/${speciality.id}`, {
      title: speciality.title,
      description: speciality.description,
      bgImage: speciality.bgImage,
    });
  };

  return (
    <div className="flex flex-col gap-[25px]">
      <div className="text-center">
        <TitleComponent>Остальные специальности</TitleComponent>
      </div>
      <div className="relative lg:px-[50px]">
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
          {specialities.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                onClick={() => handleCardClick(item)}
                className="cursor-pointer"
              >
                <CardComponent
                  title={item.title}
                  description={item.description}
                  bgImage={item.bgImage}
                  maxWidth="450px"
                  maxHeight="390px"
                />
              </div>
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
  );
}
