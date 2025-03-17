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
  const bgImage =
    media && media.length > 0
      ? `${process.env.NEXT_PUBLIC_SERVER_URL}${media[0].Data}`
      : "";

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
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="news-title">{title}</h2>
      <p className="news-description">{description}</p>
    </div>
  );
}
