"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, selectNews } from "@/stores/newsSlice";
import NewsGrid from "./NewsGridComponent";
import TitleComponent from "../UI/title/TitleComponent";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AllNewsComponent() {
  const { news, status, error } = useSelector((state) => state.news);
  const [newsData, setNewsData] = useState({
    smallNews: [],
    largeNews: [],
  });

  const dispatch = useDispatch();
  const router = useRouter();
  const categorizeNews = (news) => {
    const smallNews = [];
    const largeNews = [];

    news.forEach((item) => {
      const newsItem = {
        id: item.ID,
        title: item.Title,
        description: item.Description,
        media: item.Media,
        content: item.Content,
        createdAt: item.CreatedAt,
        published: item.Published,
        updatedAt: item.UpdatedAt,
      };

      if (item.Description.length < 10) {
        largeNews.push(newsItem);
      } else {
        smallNews.push(newsItem);
      }
    });

    console.log("Categorized news", smallNews, largeNews);
    setNewsData({ smallNews, largeNews });
  };

  const handleCardClick = (card) => {
    console.log("card", card);
    router.push(`/news/${card.id}`);
  };

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  useEffect(() => {
    if (status === "succeeded" && news) {
      categorizeNews(news);
    }
  }, [news, status]);

  const groupedNews = [];
  for (let i = 0; i < newsData.smallNews.length; i += 4) {
    const smallGroup = newsData.smallNews.slice(i, i + 4);
    const largeItem = newsData.largeNews[Math.floor(i / 4)] || null;
    groupedNews.push({ smallNews: smallGroup, largeNews: largeItem });
  }

  if (status === "loading") {
    return <div>Загрузка...</div>;
  }

  if (status === "error") {
    return <div>Ошибка при загрузке новостей: {error}</div>;
  }
  return (
    <div className="news-container">
      <TitleComponent>Все новости</TitleComponent>

      {groupedNews.map((group, index) => (
        <NewsGrid
          key={index}
          smallNews={group.smallNews}
          largeNews={group.largeNews}
          onCardClick={handleCardClick}
          reverse={index % 2 !== 0}
        />
      ))}
    </div>
  );
}
