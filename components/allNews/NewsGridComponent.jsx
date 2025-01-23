import NewsItemLarge from "./NewsItemLargeComponent";
import NewsItemSmall from "./NewsItemSmallComponent";

export default function NewsGrid({ smallNews, largeNews, reverse = false }) {
  return (
    <div className="news-grid">
      <div className="news-small-grid">
        {smallNews.map((news) => (
          <NewsItemSmall
            key={news.id}
            id={news.id} 
            title={news.title}
            description={news.description}
          />
        ))}
      </div>
      <div className="h-full" style={{ order: reverse ? -1 : 1 }}>
        <NewsItemLarge
          id={largeNews.id} 
          title={largeNews.title}
          description={largeNews.description}
        />
      </div>
    </div>
  );
}
