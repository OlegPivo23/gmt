"use client";

import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import NavigationArrowComponent from "../UI/navigationArrow/NavigationArrowComponent";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, selectNews } from "@/stores/newsSlice";

export default function NewsInfoComponent() {
  const params = useParams();
  const id = params.id ? Number(params.id) : null;
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.news); // Получаем все новости
  const selectedNews = useSelector((state) => state.news.selectedNews);

  const swiperRef = useRef(null);

  // Получаем новости, если они еще не загружены
  useEffect(() => {
    if (!news || news.length === 0) {
      dispatch(fetchNews());
    } else if (id && !selectedNews) {
      const newsItem = news.find((news) => news.ID === id);
      if (newsItem) {
        dispatch(selectNews(newsItem)); // Загружаем нужную карточку в состояние
      }
    }
  }, [id, selectedNews, news, dispatch]);

  if (!selectedNews) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="border-2 rounded-[40px] border-opacity-25 border-black bg-white px-4 md:px-[41px] py-6 md:py-[51px] mx-4 relative mb-6">
      <div className="absolute top-2 md:top-[30px] right-4 md:right-[20px] flex items-center">
        <span className="p-2 md:p-4 font-medium text-[12px] md:text-[15px] text-black"></span>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-between gap-6 md:gap-[60px] relative">
        <div className="flex-1 w-full lg:max-w-[50%] relative">
          {selectedNews?.Media?.length > 0 ? (
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
              {selectedNews.Media.map((media, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={`${process.env.NEXT_PUBLIC_SERVER_URL}${media.Data}`}
                    alt={`Изображение ${i + 1}`}
                    className="object-cover w-full h-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p>Изображения отсутствуют</p>
          )}

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
            {selectedNews?.Title || "Заголовок отсутствует"}
          </h2>
          <div className="flex flex-col gap-4 mt-4">
            <p className="font-bold text-[12px] md:text-[15px] text-black">
              {selectedNews?.Description || "Описание отсутствует"}
            </p>
            <p className="font-bold text-[12px] md:text-[15px] text-black">
              {selectedNews?.Content || "Содержание отсутствует"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
