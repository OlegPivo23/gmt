"use client";
import { useSearchParams } from "next/navigation";
import CardComponent from "../../components/cards/CardComponent";
import TitleComponent from "../../components/UI/title/TitleComponent";
import { specialities } from "@/db/specializationData";

export default function SpecializationInfoPage() {
  const searchParams = useSearchParams();

  const title = searchParams.get("title") || "Название не указано";
  const description = searchParams.get("description") || "Описание отсутствует";
  const bgImage = searchParams.get("bgImage") || "/img/default.png";

  const selectedSpeciality = specialities.find((item) => item.title === title);

  return (
    <div className="border-2 border-opacity-25 p-[30px] lg:p-[70px] flex flex-col gap-[25px] mx-4">
      <div className="flex flex-col gap-[30px] lg:gap-[95px]">
        <CardComponent
          title={title}
          description={description}
          bgImage={bgImage}
          height="220px"
          hasGradient="true"
          borderRadius="30px"
        />
        <div className="flex flex-col items-center justify-center gap-[15px]">
          <TitleComponent>{title}</TitleComponent>
          <p className="font-medium text-xl text-black">{description}</p>
          <ul className="flex flex-col gap-[25px] max-w-[1405px] w-full">
            {/* Проверяем, есть ли информация о специальности */}
            {selectedSpeciality && selectedSpeciality.info ? (
              selectedSpeciality.info.map((item, index) => (
                <li key={index}>
                  <p className="font-medium text-xl text-black">{item}</p>
                </li>
              ))
            ) : (
              <li>
                <p className="font-medium text-xl text-black">
                  Информация о специальности отсутствует.
                </p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
