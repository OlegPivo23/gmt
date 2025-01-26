import Image from "next/image"; 
import TitleComponent from "../UI/title/TitleComponent";

const directorData = {
  name: "Бирагов Давид Анатольевич",
  position: "Директор",
  education: [
    {
      period: "2000-2005 гг",
      institution:
        "Северо-Кавказкий горно-металлургический институт (Государственный технологический университет)",
      qualification: "инженер",
      specialty: "технология бродильных производств и виноделие",
      distinction: "с отличием",
    },
    {
      period: "2000-2005 гг",
      institution: "СКГМИ (ГТУ)",
      qualification: "экономист",
      specialty: "финансы и кредит",
    },
    {
      period: "2002-2005 гг",
      institution: "военная кафедра при СКГМИ (ГТУ)",
      militaryRank: "лейтенант",
    },
    {
      period: "2005-2008 гг",
      institution: "СКГМИ (ГТУ)",
      profile: "технический",
    },
    {
      period: "2017-2017 гг",
      institution: "Международная академия экспертизы и оценки г. Саратов",
      specialty: "Менеджмент в образовании",
    },
  ],
  scientificWorks: [
    "2 патента",
    "13 научных трудов и учебно-методических пособий",
  ],
  workExperience: [
    {
      period: "2001-2002 гг",
      position: "разнорабочий",
      company: "ГУП Винодельческий завод «Владимировский»",
    },
  ],
};

export default function GuideComponent() {
  return (
    <div className="px-4 md:px-24 lg:px-32 xl:px-48">
      <TitleComponent>Администрация</TitleComponent>
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-16">
        <div className="w-full md:w-1/2 lg:w-1/3  ">
          <Image
            src="/img/guide/hero1.png"
            alt="Директор"
            width={450}
            height={600}
            className="object-cover rounded-lg"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3">
          <p className="font-extrabold text-xl md:text-2xl text-[#1f1f1f]">
            {directorData.position}
          </p>
          <TitleComponent>{directorData.name}</TitleComponent>

          <ul className="space-y-4">
            <li>
              <span className="font-extrabold text-xl md:text-2xl text-[#1f1f1f]">
                Образование
              </span>
            </li>
            {directorData.education.map((edu, index) => (
              <li
                key={index}
                className="font-bold text-lg md:text-xl text-[#000]"
              >
                {edu.period} – {edu.institution}. Квалификация —{" "}
                {edu.qualification}, специальность — {edu.specialty}{" "}
                {edu.distinction && `(${edu.distinction})`}
                {edu.militaryRank && `. Воинское звание: ${edu.militaryRank}`}
                {edu.profile && `. Профиль: ${edu.profile}`}
              </li>
            ))}
          </ul>

          {/* Научные труды */}
          <ul className="mt-6 space-y-4">
            <li>
              <span className="font-extrabold text-xl md:text-2xl text-[#1f1f1f]">
                Научные труды:
              </span>
            </li>
            {directorData.scientificWorks.map((work, index) => (
              <li
                key={index}
                className="font-bold text-lg md:text-xl text-[#000]"
              >
                {work}
              </li>
            ))}
          </ul>

          {/* Опыт работы */}
          <ul className="mt-6 space-y-4">
            <li>
              <span className="font-extrabold text-xl md:text-2xl text-[#1f1f1f]">
                Опыт работы:
              </span>
            </li>
            {directorData.workExperience.map((exp, index) => (
              <li
                key={index}
                className="font-bold text-lg md:text-xl text-[#000]"
              >
                {exp.period} – {exp.position}, {exp.company}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
