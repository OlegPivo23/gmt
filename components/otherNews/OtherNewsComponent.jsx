"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";

import CardComponent from "../cards/CardComponent";
import NavigationArrowComponent from "../UI/navigationArrow/NavigationArrowComponent";
import TitleComponent from "../UI/title/TitleComponent";
import { newsData } from "@/db/newsData";
import ShowButton from "../UI/button/ShowButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { fetchNews, selectNews } from "@/stores/newsSlice";

export default function OtherNewsComponent() {
  const params = useParams();
  const id = params.id ? Number(params.id) : null;
  const selectedNews = useSelector((state) => state.news.selectedNews);

  const router = useRouter();
  const swiperRef = useRef(null);
  const { news, status, error } = useSelector((state) => state.news);

  const handlePrev = () => swiperRef.current?.swiper.slidePrev();
  const handleNext = () => swiperRef.current?.swiper.slideNext();

  const dispatch = useDispatch();

  const handleCardClick = (card) => {
    dispatch(selectNews(card));
    router.push(`/news/${card.ID}`);
  };
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  if (!selectedNews || selectedNews.ID !== id) {
    return <p>Новость не найдена</p>;
  }
  return (
    <div className="flex flex-col gap-4 px-[20px] md:px-[81px]">
      <div className="flex justify-center">
        <TitleComponent>Остальные новости</TitleComponent>
      </div>

      <div className=" relative">
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
          {news.map((card) => (
            <SwiperSlide key={card.ID}>
              <div
                onClick={() => handleCardClick(card)}
                className="cursor-pointer"
              >
                <CardComponent
                  title={card.Title}
                  description={card.Description}
                  hasGradient="true"
                  bgImage={
                    card.Media && card.Media.length > 0
                      ? `${process.env.NEXT_PUBLIC_SERVER_URL}${card.Media[0].Data}`
                      : ""
                  }
                  className=" w-[390px]  h-[390px]"
                />
              </div>
            </SwiperSlide>
          ))}
          <div onClick={handlePrev}>
            <NavigationArrowComponent
              direction="left"
              className="pointer-events-auto z-10 absolute left-[-25px]"
            />
          </div>
          <div onClick={handleNext}>
            <NavigationArrowComponent
              direction="right"
              className=" pointer-events-auto z-10"
            />
          </div>
        </Swiper>
      </div>
      {/* Кастомные стрелки */}
    </div>
  );
}
