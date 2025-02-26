import Image from "next/image";
import TitleComponent from "../UI/title/TitleComponent";
import CardComponent from "../cards/CardComponent";
import { cards, administrationData } from "@/db/guideData";

export default function GuideComponent() {
  return (
    <div className="px-4 md:px-12 lg:px-24 xl:px-32">
      <TitleComponent>Администрация</TitleComponent>
      <div className="flex flex-col gap-[30px]">
        {administrationData.map((person, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-16 mb-12"
          >
            {/* Фото */}
            <div className="w-full md:w-1/3">
              <Image
                src={person.photo}
                alt={person.name}
                width={450}
                height={600}
                className="object-cover w-full h-auto"
                priority
              />
            </div>

            {/* Описание */}
            <div className="w-full md:w-2/3">
              <p className="font-montserrat font-extrabold text-[24px] text-[#1f1f1f]">
                {person.position}
              </p>
              <h2 className="font-montserrat font-extrabold text-[25px] lg:text-[40px] text-[#1f1f1f]">
                {person.name}
              </h2>

              {/* Образование */}
              <ul>
                <li>
                  <span className="font-montserrat font-extrabold text-[20px] text-[#1f1f1f]">
                    Образование:
                  </span>
                </li>
                {person.education.map((edu, idx) => (
                  <li
                    key={idx}
                    className="font-montserrat text-[20px] text-[#000] leading-relaxed"
                  >
                    {edu}
                  </li>
                ))}
              </ul>

              {/* Научные труды */}
              <ul className="mt-6 ">
                {person.scientificWorks &&
                  person.scientificWorks.length > 0 && (
                    <>
                      <li>
                        <span className="font-montserrat font-extrabold text-[20px] text-[#1f1f1f]">
                          Научные труды:
                        </span>
                      </li>
                      {person.scientificWorks.map((work, idx) => (
                        <li
                          key={idx}
                          className="font-montserrat text-[20px] text-[#000] leading-relaxed"
                        >
                          {work}
                        </li>
                      ))}
                    </>
                  )}
                <li>
                  <span className="font-montserrat font-extrabold  text-[20px] text-[#1f1f1f]">
                    Опыт работы
                  </span>
                </li>
                {person.experience.map((exp, idx) => (
                  <li
                    key={idx}
                    className="font-montserrat text-[20px] text-[#000] "
                  >
                    {exp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <TitleComponent>Фото</TitleComponent>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, i) => (
          <CardComponent
            key={i}
            bgImage={card}
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
