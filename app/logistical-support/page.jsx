import SecondaryLayout from "@/components/layouts/SecondaryLayout";
import "../main.scss";

const links = [
  {
    link: "",
    text: "Материально-техническое обеспечение",
  },
  {
    link: "",
    text: "Обеспечение условий безопасности образовательного процесса ",
  },
  {
    link: "",
    text: "Базы практик",
  },
  {
    link: "",
    text: "Договоры о реализации практической подготовки обучающихся",
  },
  {
    link: "",
    text: "Договор Интернет ",
  },
  {
    link: "",
    text: "Положение_ЭИОС  ВОДНПТ",
  },
  {
    link: "",
    text: "Цифровая электронная библиотека ",
  },
  {
    link: "",
    text: "ФГИС «Моя школа» ",
  },
  {
    link: "",
    text: "Электронные образовательные ресурсы Паспорт доступности по инвалидности ",
  },
  {
    link: "",
    text: "Положение об организации обучения инвалидов и лиц с ОВЗ",
  },
];

export default function LogisticalSupportPage() {
  return (
    <div className="page">
      <SecondaryLayout>
        <div className="px-[20px] lg:px-[40px]">
          <ul className="list-disc list-inside space-y-4">
            {links.map((item, i) => (
              <li key={i}>
                <a
                  className="font-bold text-[20px] lg:text-[48px] text-black underline decoration-0"
                  href={item.link}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </SecondaryLayout>
    </div>
  );
}
