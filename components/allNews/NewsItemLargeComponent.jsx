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
  // Получаем URL фонового изображения
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
        backgroundImage: bgImage ? `url(${bgImage})` : "none", // Фоновое изображение
        backgroundSize: "cover", // Растягиваем изображение на весь блок
        backgroundPosition: "center", // Центрируем изображение
      }}
    >
      {/* Заголовок новости */}
      <h2 className="news-title">{title}</h2>

      {/* Описание новости */}
      <p className="news-description">{description}</p>
    </div>
  );
}
