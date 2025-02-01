"use client";
import { useRouter } from "next/navigation";
import CardComponent from "../cards/CardComponent";
import ShowButton from "../UI/button/ShowButtonComponent";
import TitleComponent from "../UI/title/TitleComponent";

const specialities = [
  {
    id: 1,
    title: "Туризм и гостеприимство",
    description: "Описание специальности",
    bgImage: "/img/specialities/bg-img1.png",
    height: "254px",
    buttonText: "Подробнее",
  },
  {
    id: 2,
    title: "Экономика и бухгалтерский учет (по отраслям)",
    description: "Описание специальности",
    bgImage: "/img/specialities/bg-img5.png",
    height: "254px",
    buttonText: "Подробнее",
  },
  {
    id: 3,
    title: "Земельно-имущественные отношения​.",
    description: "Описание специальности",
    bgImage: "/img/specialities/bg-img4.png",
    height: "254px",
    buttonText: "Подробнее",
  },
  {
    id: 4,
    title: "Оператор информационных систем и ресурсов ",
    description: "Описание специальности",
    bgImage: "/img/specialities/bg-img3.png",
    height: "254px",
    buttonText: "Подробнее",
  },
  {
    id: 5,
    title: "Защита в чрезвычайных ситуациях",
    description: "Описание специальности",
    bgImage: "/img/specialities/bg-img2.png",
    height: "254px",
    buttonText: "Подробнее",
  },
];

export default function SpecialtiesComponent() {
  const router = useRouter();

  const handleCardClick = (speciality) => {
    router.push(
      `/specialties/${speciality.id}?title=${encodeURIComponent(
        speciality.title
      )}&description=${encodeURIComponent(
        speciality.description
      )}&bgImage=${encodeURIComponent(speciality.bgImage)}`
    );
  };

  const handleShowAllClick = () => {
    router.push("/all-specialties");
  };

  return (
    <div className="flex flex-col gap-[25px]">
      <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center">
        <TitleComponent>Наши специальности</TitleComponent>
        {/* Передаем колбек в кнопку */}
        <ShowButton onClick={handleShowAllClick}>Показать все</ShowButton>
      </div>
      <div className="flex flex-col gap-[35px]">
        {specialities.map((item) => (
          <div
            key={item.id}
            onClick={() => handleCardClick(item)}
            className="cursor-pointer"
          >
            <CardComponent
              title={item.title}
              description={item.description}
              bgImage={item.bgImage}
              height={item.height}
              buttonText={item.buttonText}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
