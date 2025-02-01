"use client"; // Добавляем директиву для использования клиентских фич
import { useRouter } from "next/navigation"; // Импортируем useRouter
import CardComponent from "../cards/CardComponent";
import ShowButton from "../UI/button/ShowButtonComponent";
import TitleComponent from "../UI/title/TitleComponent";
import { useNavigation } from "../../hooks/useNavigation"; // Импортируем кастомный хук

const cards = [
  {
    id: 1, // Добавляем уникальный ID для каждой новости
    title: "Новость 1",
    description: "Краткое описание новости 1",
    bgImage: "/img/news/card-bg.png",
  },
  {
    id: 2,
    title: "Новость 2",
    description: "Краткое описание новости 2",
    bgImage: "/img/news/card-bg.png",
  },
  {
    id: 3,
    title: "Новость 3",
    description: "Краткое описание новости 3",
    bgImage: "/img/news/card-bg.png",
  },
];

export default function NewsComponent() {
  const router = useRouter();
  const navigateTo = useNavigation();

  const handleShowAllClick = () => {
    router.push("/all-news");
  };

  const handleCardClick = (card) => {
    navigateTo(`/news/${card.id}`, {
      title: card.title,
      description: card.description,
      bgImage: card.bgImage,
    });
  };

  return (
    <div className="flex flex-col gap-[25px]">
      <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center">
        <TitleComponent>Новости</TitleComponent>
        <ShowButton onClick={handleShowAllClick}>Показать все</ShowButton>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[21px]">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(card)}
            className="cursor-pointer"
          >
            <CardComponent
              title={card.title}
              description={card.description}
              bgImage={card.bgImage}
              maxWidth="458px"
              maxHeight="322px"
              width="100%"
              height="100%"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
