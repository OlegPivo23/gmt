import CardComponent from "../cards/CardComponent";
import TitleComponent from "../UI/title/TitleComponent";

const ScheduleGrid = ({ title, cards }) => {
  return (
    <div className="flex flex-col gap-[25px] px-[43px]">
      <TitleComponent>{title}</TitleComponent>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[52px] justify-center items-center">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col items-center">
            <CardComponent bgImage={card.bgImage} maxHeight="190px" />
            <p className="mt-2 text-center font-bold text-[32px] text-[#1f1f1f]">
              {card.text1}
            </p>
            <p className="mt-1 text-center font-medium text-[16px] text-[#1f1f1f]">
              {card.text2}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ScheduleComponent() {
  const cards = [
    {
      bgImage: "/img/schedule/schedule.png",
      text1: "Текст 1",
      text2: "Текст 2",
    },
    {
      bgImage: "/img/schedule/schedule.png",
      text1: "Текст 1",
      text2: "Текст 2",
    },
    {
      bgImage: "/img/schedule/schedule.png",
      text1: "Текст 1",
      text2: "Текст 2",
    },
    {
      bgImage: "/img/schedule/schedule.png",
      text1: "Текст 1",
      text2: "Текст 2",
    },
    {
      bgImage: "/img/schedule/schedule.png",
      text1: "Текст 1",
      text2: "Текст 2",
    },
    {
      bgImage: "/img/schedule/schedule.png",
      text1: "Текст 1",
      text2: "Текст 2",
    },
    {
      bgImage: "/img/schedule/schedule.png",
      text1: "Текст 1",
      text2: "Текст 2",
    },
    {
      bgImage: "/img/schedule/schedule.png",
      text1: "Текст 1",
      text2: "Текст 2",
    },
  ];

  return (
    <div>
      <ScheduleGrid
        title="Расписание занятий 2023-2024 учебный год"
        cards={cards}
      />

      <ScheduleGrid
        title="Расписание занятий 2024-2025 учебный год"
        cards={cards}
      />
    </div>
  );
}
