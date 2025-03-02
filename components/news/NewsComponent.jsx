"use client";

import { useRouter } from "next/navigation";
import CardComponent from "../cards/CardComponent";
import ShowButton from "../UI/button/ShowButtonComponent";
import TitleComponent from "../UI/title/TitleComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, selectNews } from "@/stores/newsSlice";
import { useEffect } from "react";

export default function NewsComponent() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { news, status, error } = useSelector((state) => state.news);

  const handleShowAllClick = () => {
    router.push("/all-news");
  };

  const handleCardClick = (card) => {
    dispatch(selectNews(card));
    router.push(`/news/${card.ID}`);
  };

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="flex flex-col gap-[25px]">
      <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center">
        <TitleComponent>Новости</TitleComponent>
        <ShowButton onClick={handleShowAllClick}>Показать все</ShowButton>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[21px]">
        {news && news.length > 0 ? (
          news
            .map((card) => (
              <div
                key={card.ID}
                onClick={() => handleCardClick(card)}
                className="cursor-pointer"
              >
                <CardComponent
                  title={card.Title}
                  description={card.Description}
                  bgImage={
                    card.Media && card.Media.length > 0
                      ? `${process.env.NEXT_PUBLIC_SERVER_URL}${card.Media[0].Data}`
                      : ""
                  }
                  className="max-h-[280px] max-w-[398px]"
                  borderRadius="30px"
                  hasGradient="true"
                  width="100%"
                  height="100%"
                />
              </div>
            ))
            .slice(0, 3)
        ) : (
          <p>Новости не найдены</p>
        )}
      </div>
    </div>
  );
}
