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
          {Array.isArray(largeNews) ? (
            largeNews.map((news) => (
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
            ))
          ) : (
            <NewsItemLarge
              key={largeNews.id}
              id={largeNews.id}
              title={largeNews.title}
              description={largeNews.description}
              media={largeNews.media}
              content={largeNews.content}
              createdAt={largeNews.createdAt}
              published={largeNews.published}
              updatedAt={largeNews.updatedAt}
              onCardClick={onCardClick}
            />
          )}
        </div>
      )}
    </div>
  );
}
