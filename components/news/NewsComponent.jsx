import CardComponent from "../cards/CardComponent";
import ShowButton from "../UI/button/ShowButtonComponent";
import TitleComponent from "../UI/title/TitleComponent";

const cards = [
  {
    title: "Новость 1",
    description: "Краткое описание новости 1",
    bgImage: "/img/news/card-bg.png",
  },
  {
    title: "Новость 2",
    description: "Краткое описание новости 2",
    bgImage: "/img/news/card-bg.png",
  },
  {
    title: "Новость 3",
    description: "Краткое описание новости 3",
    bgImage: "/img/news/card-bg.png",
  },
];

export default function NewsComponent() {
  return (
    <div className="flex flex-col gap-[25px]">
      <div className="flex justify-between items-center">
        <TitleComponent>Новости</TitleComponent>
        <ShowButton>Показать все</ShowButton>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[21px]">
        {cards.map((card, index) => (
          <CardComponent
            key={index}
            title={card.title}
            description={card.description}
            bgImage={card.bgImage}
            maxWidth="458px" 
            maxHeight="322px"
            width="100%" 
            height="100%"
          />
        ))}
      </div>
    </div>
  );
}
