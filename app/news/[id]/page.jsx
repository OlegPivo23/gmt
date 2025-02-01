"use client";

import MainLayout from "@/components/layouts/MainLayout";
import { useParams } from "next/navigation";
import { newsData } from "@/components/allNews/AllNewsComponent";
import NewsInfoComponent from "@/components/newsInfo/NewsInfoComponent";
import OtherNewsComponent from "@/components/otherNews/OtherNewsComponent";
import '../../main.scss'

export default function NewsPage() {
  const { id } = useParams();
  const { smallNews, largeNews } = newsData;

  const allNews = [...smallNews, ...largeNews];
  const currentNews = allNews.find((news) => news.id === parseInt(id, 10));

  if (!currentNews) return <div>Новость не найдена</div>;

  return (
    <div className="page">
      <MainLayout>
        <NewsInfoComponent />
        <OtherNewsComponent />
      </MainLayout>
    </div>
  );
}
