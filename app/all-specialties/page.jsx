import CardComponent from "@/components/cards/CardComponent";
import MainLayout from "@/components/layouts/MainLayout";
import TitleComponent from "@/components/UI/title/TitleComponent";

import "./allSpecialties.scss";

const cards = [
  {
    title: "Защита в чрезвычайных ситуациях",
    description: "Описание новости 1",
    bgImg: "/img/news/card-bg.png",
  },
  {
    title: "Туризм и гостеприимство",
    description: "Описание новости 2",
    bgImg: "/img/news/card-bg.png",
  },
  {
    title: "Повар",
    description: "Описание новости 3",
    bgImg: "/img/news/card-bg.png",
  },
  {
    title: "Мехатроника и робототехника (по отраслям)",
    description: "Описание новости 4",
    bgImg: "/img/news/card-bg.png",
  },
  {
    title: "Оператор информационных систем и ресурсов",
    description: "Описание новости 5",
    bgImg: "/img/news/card-bg.png",
  },
  {
    title: "Мастер столярного и мебельного производства",
    description: "Описание новости 6",
    bgImg: "/img/news/card-bg.png",
  },
  {
    title: "Информационные системы и программирование",
    description: "Описание новости 6",
    bgImg: "/img/news/card-bg.png",
  },
  {
    title: "Юриспруденция",
    description: "Описание новости 6",
    bgImg: "/img/news/card-bg.png",
  },
  {
    title: "Мастер контрольно измерительных приборов и автоматики",
    description: "Описание новости 6",
    bgImg: "/img/news/card-bg.png",
  },
  {
    title: "Монтаж, тех. обслуживание и ремонт промышленного оборудования",
    description: "Описание новости 6",
    bgImg: "/img/news/card-bg.png",
  },
  {
    title: "Мастер по ремонту инж. систем ЖКХ",
    description: "Описание новости 6",
    bgImg: "/img/news/card-bg.png",
  },
  {
    title: "Эксплуатация и обслуживание эл. и элмех. оборудования (по отраслям)",
    description: "Описание новости 6",
    bgImg: "/img/news/card-bg.png",
  },
  {
    title: "Тех. обслуживание и ремонт двигателей, систем автомобилей",
    description: "Описание новости 6",
    bgImg: "/img/news/card-bg.png",
  },
];

export default function AllSpecialtiesPage() {
  return (
    <div className="page">
      <MainLayout>
        <div className="flex flex-col gap-[25px] px-[90px]">
          <TitleComponent>Все специальности</TitleComponent>
          <div className="specialties-grid ]">
            {cards.map((card, index) => (
              <CardComponent
                key={index}
                title={card.title}
                description={card.description}
                bgImage={card.bgImg}
                maxHeight="254px"
              />
            ))}
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
