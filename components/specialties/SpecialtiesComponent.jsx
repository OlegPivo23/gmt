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
    title: "Туризм и гостеприимство2",
    description: "Описание специальности",
    bgImage: "/img/specialities/bg-img1.png",
    height: "254px",
    buttonText: "Подробнее",
  },
  {
    id: 3,
    title: "Туризм и гостеприимство3",
    description: "Описание специальности",
    bgImage: "/img/specialities/bg-img1.png",
    height: "254px",
    buttonText: "Подробнее",
  },
  {
    id: 4,
    title: "Туризм и гостеприимство4",
    description: "Описание специальности",
    bgImage: "/img/specialities/bg-img1.png",
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

  return (
    <div className="flex flex-col gap-[25px]">
      <div className="flex justify-between items-center">
        <TitleComponent>Наши специальности</TitleComponent>
        <ShowButton>Показать все</ShowButton>
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
