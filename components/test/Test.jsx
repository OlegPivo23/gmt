"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "@/stores/newsSlice"; // Импортируйте ваш action

export default function NewsComponent() {
  const dispatch = useDispatch();

  const { news, status, error } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews()); // Отправляем действие для загрузки данных
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>News</h1>
      <div className="grid grid-cols-3 gap-4">
        {news.map((item) => (
          <div key={item.ID}>
            <CardComponent
              hasGradient="true"
              borderRadius="30px"
              title={item.Title}
              bgImage={
                item.Media.length > 0
                  ? `data:image/png;base64,${item.Media[0].Data}`
                  : ""
              }
              description={item.Description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
