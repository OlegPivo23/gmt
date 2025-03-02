import Image from "next/image";
import TitleComponent from "../UI/title/TitleComponent";
import CardComponent from "../cards/CardComponent";
import { cards, administrationData } from "@/db/guideData";

export default function GuideComponent() {
  return (
    <div className="px-4 md:px-12 lg:px-24 xl:px-32">
      <TitleComponent>Администрация</TitleComponent>
      <div className="flex flex-col gap-[30px] mt-4">
        {administrationData.map((person, index) => (
          <div key={index} className="mb-12">
            {/* Фото и описание */}
            <div>
              {/* Фото */}
              <div className="float-left  mr-6">
                <Image
                  src={person.photo}
                  alt={person.name}
                  width={250}
                  height={300}
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>

              {/* Описание (позиция, имя, образование, научные труды, опыт работы) */}
              <div>
                <p className="font-montserrat font-extrabold text-[24px] text-[#1f1f1f]">
                  {person.position}
                </p>
                <h2 className="font-montserrat font-extrabold text-[20px] sm:text-[30px] text-[#1f1f1f]">
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
                {person.scientificWorks &&
                  person.scientificWorks.length > 0 && (
                    <ul className="mt-6">
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
                    </ul>
                  )}

                {/* Опыт работы */}
                <ul className="mt-6">
                  <li>
                    <span className="font-montserrat font-extrabold text-[20px] text-[#1f1f1f]">
                      Опыт работы:
                    </span>
                  </li>
                  {person.experience.map((exp, idx) => (
                    <li
                      key={idx}
                      className="font-montserrat text-[20px] text-[#000]"
                    >
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>
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
