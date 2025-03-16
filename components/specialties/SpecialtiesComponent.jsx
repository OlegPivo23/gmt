"use client";
import { useRouter } from "next/navigation";
import CardComponent from "../cards/CardComponent";
import ShowButton from "../UI/button/ShowButtonComponent";
import TitleComponent from "../UI/title/TitleComponent";
import { specialities } from "@/db/specializationData";

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
        {specialities
          .map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              className="cursor-pointer"
            >
              <CardComponent
                title={item.title}
                description={item.description}
                bgImage={item.bgImage}
                borderRadius="30px"
                className="max-h-[220px]"
                buttonText={item.buttonText}
                hasGradient="true"
              />
            </div>
          ))
          .splice(0, 5)}
      </div>
    </div>
  );
}
