"use client";
import { useSearchParams } from "next/navigation";
import CardComponent from "../../components/cards/CardComponent";
import TitleComponent from "../../components/UI/title/TitleComponent";

export default function SpecializationInfoPage() {
  const searchParams = useSearchParams();

  const title = searchParams.get("title") || "Название не указано";
  const description = searchParams.get("description") || "Описание отсутствует";
  const bgImage = searchParams.get("bgImage") || "/img/default.png";

  return (
    <div className="border-2 border-opacity-25  p-[30px] lg:p-[70px] flex flex-col gap-[25px] mx-4">
      <div className="flex flex-col gap-[95px]">
        <CardComponent
          title={title}
          description={description}
          bgImage={bgImage}
          height="322px"
        />
        <div className="flex flex-col items-center justify-center gap-[15px] ">
          <TitleComponent>{title}</TitleComponent>
          <p className="font-medium text-xl text-black">{description}</p>
          <ul className="flex flex-col gap-[25px] max-w-[1405px] w-full ">
            <li>
              <p className="font-medium text-xl text-black">
                Организация и проведение работ по ликвидации последствий
                чрезвычайных ситуаций; планирование и осуществление мероприятий
                по предотвращению аварий и катастроф природного и техногенного
                характера и снижению их негативных последствий; техническое
                обслуживание, ремонт и хранение аварийно-спасательной техники,
                оборудования и снаряжения.
              </p>
            </li>
            <li>
              <p className="font-medium text-xl text-black">
                Организация и проведение работ по ликвидации последствий
                чрезвычайных ситуаций; планирование и осуществление мероприятий
                по предотвращению аварий и катастроф природного и техногенного
                характера и снижению их негативных последствий; техническое
                обслуживание, ремонт и хранение аварийно-спасательной техники,
                оборудования и снаряжения.
              </p>
            </li>
            <li>
              <p className="font-medium text-xl text-black">
                Организация и проведение работ по ликвидации последствий
                чрезвычайных ситуаций; планирование и осуществление мероприятий
                по предотвращению аварий и катастроф природного и техногенного
                характера и снижению их негативных последствий; техническое
                обслуживание, ремонт и хранение аварийно-спасательной техники,
                оборудования и снаряжения.
              </p>
            </li>
            <li>
              <p className="font-medium text-xl text-black">
                Организация и проведение работ по ликвидации последствий
                чрезвычайных ситуаций; планирование и осуществление мероприятий
                по предотвращению аварий и катастроф природного и техногенного
                характера и снижению их негативных последствий; техническое
                обслуживание, ремонт и хранение аварийно-спасательной техники,
                оборудования и снаряжения.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
