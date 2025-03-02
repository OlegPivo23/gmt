export default function NewsItemLarge({
  id,
  title,
  description,
  media,
  content,
  createdAt,
  published,
  updatedAt,
  onCardClick,
}) {
  return (
    <div
      className="news-item-large"
      onClick={() =>
        onCardClick({
          id,
          title,
          description,
          media,
          content,
          createdAt,
          published,
          updatedAt,
        })
      }
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
