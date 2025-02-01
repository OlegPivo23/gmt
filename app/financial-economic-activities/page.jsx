import CardComponent from "@/components/cards/CardComponent";
import SecondaryLayout from "@/components/layouts/SecondaryLayout";
import "../main.scss";

const cards = [
  {
    id: 1,
    bgImage: "/img/news/card-bg.png",
    footerText: "Карточка 1",
  },
  {
    id: 2,

    bgImage: "/img/news/card-bg.png",
    footerText: "Карточка 2",
  },
  {
    id: 3,

    bgImage: "/img/news/card-bg.png",
    footerText: "План ФХД 2021-2023",
  },
];

export default function FinancialEconomicActivities() {
  return (
    <div className="page">
      <SecondaryLayout>
        <div className="px-[20px] lg:px-[75px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {cards.map((card) => (
              <CardComponent
                key={card.id}
                bgImage={card.bgImage}
                maxWidth="458px"
                maxHeight="322px"
                width="100%"
                height="100%"
                footerText={card.footerText}
              />
            ))}
          </div>
        </div>
      </SecondaryLayout>
    </div>
  );
}
