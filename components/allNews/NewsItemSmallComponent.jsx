export default function NewsItemSmall({
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
      className="news-item-small"
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
      <p className="news-title">{title}</p>
      <span className="news-description">{description}</span>
    </div>
  );
}
