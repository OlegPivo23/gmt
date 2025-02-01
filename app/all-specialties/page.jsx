"use client";
import CardComponent from "@/components/cards/CardComponent";
import MainLayout from "@/components/layouts/MainLayout";
import TitleComponent from "@/components/UI/title/TitleComponent";
import "../main.scss";
import { useNavigation } from "@/hooks/useNavigation";
import "./allSpecialties.scss";

const cards = [
  {
    id: 1,
    title: "Защита в чрезвычайных ситуациях",
    description: "Описание новости 1",
    bgImage: "/img/specialities/bg-img2.png",
  },
  {
    id: 2,
    title: "Туризм и гостеприимство",
    description: "Описание новости 2",
    bgImage: "/img/specialities/bg-img1.png",
  },
  {
    id: 3,
    title: "Повар",
    description: "Описание новости 3",
    bgImage: "/img/specialities/bg-img6.png",
  },
  {
    id: 4,
    title: "Мехатроника и робототехника (по отраслям)",
    description: "Описание новости 4",
    bgImage: "/img/specialities/bg-img7.png",
  },
  {
    id: 5,
    title: "Оператор информационных систем и ресурсов",
    description: "Описание новости 5",
    bgImage: "/img/specialities/bg-img3.png",
  },
  {
    id: 6,
    title: "Мастер столярного и мебельного производства",
    description: "Описание новости 6",
    bgImage: "/img/specialities/bg-img8.png",
  },
  {
    id: 7,
    title: "Информационные системы и программирование",
    description: "Описание новости 6",
    bgImage: "/img/specialities/bg-img9.png",
  },
  {
    id: 8,
    title: "Юриспруденция",
    description: "Описание новости 6",
    bgImage: "/img/specialities/bg-img10.png",
  },
  {
    id: 9,
    title: "Мастер контрольно измерительных приборов и автоматики",
    description: "Описание новости 6",
    bgImage: "/img/specialities/bg-img11.png",
  },
  {
    id: 10,
    title: "Монтаж, тех. обслуживание и ремонт промышленного оборудования",
    description: "Описание новости 6",
    bgImage: "/img/specialities/bg-img12.png",
  },
  {
    id: 11,
    title: "Мастер по ремонту инж. систем ЖКХ",
    description: "Описание новости 6",
    bgImage: "/img/specialities/bg-img13.png",
  },
  {
    id: 12,
    title:
      "Эксплуатация и обслуживание эл. и элмех. оборудования (по отраслям)",
    description: "Описание новости 6",
    bgImage: "/img/specialities/bg-img14.png",
  },
  {
    id: 13,
    title: "Тех. обслуживание и ремонт двигателей, систем автомобилей",
    description: "Описание новости 6",
    bgImage: "/img/specialities/bg-img15.png",
  },
];

export default function AllSpecialtiesPage() {
  const navigateTo = useNavigation();

  const handleCardClick = (speciality) => {
    console.log("Card clicked:", speciality); // Проверка вызова функции
    navigateTo(`/specialties/${speciality.id}`, {
      title: speciality.title,
      description: speciality.description,
      bgImage: speciality.bgImage,
    });
  };

  return (
    <div className="page">
      <MainLayout>
        <div className="flex flex-col gap-[25px] px-[20px] lg:px-[90px]">
          <TitleComponent>Все специальности</TitleComponent>
          <div className="specialties-grid">
            {cards.map((card) => (
              <div onClick={() => handleCardClick(card)} key={card.id} className="md:grid-cols-1">
                <CardComponent
                  title={card.title}
                  description={card.description}
                  bgImage={card.bgImage}
                  maxHeight="254px"
                />
              </div>
            ))}
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
