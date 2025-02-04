"use client";

import { useRouter } from "next/navigation";
import CardComponent from "../cards/CardComponent";
import ShowButton from "../UI/button/ShowButtonComponent";
import TitleComponent from "../UI/title/TitleComponent";
import { newsData } from "@/db/newsData";

export default function NewsComponent() {
  const router = useRouter();

  const handleShowAllClick = () => {
    router.push("/all-news");
  };

  const handleCardClick = (card) => {
    router.push(
      `/news/${card.id}?title=${encodeURIComponent(
        card.title
      )}&description=${encodeURIComponent(
        card.description
      )}&bgImage=${encodeURIComponent(card.bgImage)}`
    );
  };

  return (
    <div className="flex flex-col gap-[25px]">
      <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center">
        <TitleComponent>Новости</TitleComponent>
        <ShowButton onClick={handleShowAllClick}>Показать все</ShowButton>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[21px]">
        {newsData.map((card, index) => (
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
