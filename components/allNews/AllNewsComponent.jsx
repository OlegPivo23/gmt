import TitleComponent from "../UI/title/TitleComponent";
import NewsGrid from "./NewsGridComponent";
import "./allNews.scss";

const newsData = {
  smallNews: [
    { id: 1, title: "Новость 1", description: "Описание" },
    { id: 2, title: "Новость 2", description: "Описание" },
    { id: 3, title: "Новость 3", description: "Описание" },
    { id: 4, title: "Новость 4", description: "Описание" },
  ],
  largeNews: [
    { id: 3, title: "Новость 3", description: "Описание" },
    { id: 4, title: "Новость 4", description: "Описание" },
  ],
};

export default function AllNewsComponent() {
  const { smallNews, largeNews } = newsData;

  return (
    <div className="news-container">
      <TitleComponent>Все новости</TitleComponent>
      <NewsGrid smallNews={smallNews} largeNews={largeNews[0]} />
      <NewsGrid smallNews={smallNews} largeNews={largeNews[1]} reverse />
      <NewsGrid smallNews={smallNews} largeNews={largeNews[0]} />
    </div>
  );
}

export { newsData };
