import NewsItemLarge from "./NewsItemLargeComponent";
import NewsItemSmall from "./NewsItemSmallComponent";
import "./allNews.scss";

export default function NewsGrid({
  smallNews,
  largeNews,
  reverse = false,
  onCardClick,
}) {
  return (
    <div className="news-grid">
      <div className="news-small-grid">
        {smallNews.map((news) => (
          <NewsItemSmall
            key={news.id}
            id={news.id}
            title={news.title}
            description={news.description}
            media={news.media}
            content={news.content}
            createdAt={news.createdAt}
            published={news.published}
            updatedAt={news.updatedAt}
            onCardClick={onCardClick}
          />
        ))}
      </div>
      {largeNews && (
        <div className="h-full" style={{ order: reverse ? -1 : 1 }}>
          <NewsItemLarge
            key={news.id}
            id={news.id}
            title={news.title}
            description={news.description}
            media={news.media}
            content={news.content}
            createdAt={news.createdAt}
            published={news.published}
            updatedAt={news.updatedAt}
            onCardClick={onCardClick}
          />
        </div>
      )}
    </div>
  );
}
