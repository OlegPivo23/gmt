import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import TitleComponent from "../UI/title/TitleComponent";
import NavigationArrowComponent from "../UI/navigationArrow/NavigationArrowComponent";
import { useRef } from "react";

const images = [
  "/img/professionalism/career-card.png",
  "/img/professionalism/career-card3.png",
  "/img/professionalism/career-card4.png",
  "/img/professionalism/career-card5.png",
  "/img/professionalism/career-card6.png",
  "/img/professionalism/career-card7.png",
  "/img/professionalism/career-card8.png",
  "/img/professionalism/career-card9.png",
  "/img/professionalism/career-card10.png",
  "/img/professionalism/career-card11.png",
];
export default function CareerCardComponent() {
  const swiperRef = useRef(null);

  return (
    <div className="mt-5 relative flex flex-col items-center">
      <TitleComponent>Карьерная карта</TitleComponent>
      <div className="relative w-full max-w-[1200px]">
        {/* Левая кнопка */}
        <NavigationArrowComponent
          direction="left"
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 w-max"
        />

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="mt-4"
        >
          {images.map((item, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={item}
                alt="card image"
                className="w-full rounded-lg shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Правая кнопка */}
        <NavigationArrowComponent
          direction="right"
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 w-max"
        />
      </div>
    </div>
  );
}
