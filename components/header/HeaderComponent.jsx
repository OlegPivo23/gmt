import HeaderBottomNav from "./headerTop/HeaderBottomNav";
import HeaderTopNav from "./headerTop/HeaderTopNav";

import style from "./header.module.scss";

const headerLinks = [
  { name: "Абитуриентам", link: "/applicants" },
  { name: "О техникуме", link: "/about" },
  { name: "Студентам", link: "/students" },
  { name: "Методическая работа", link: "/methodical " },
];

export default function Header() {
  return (
    <div className={style.header}>
      <div>
        <HeaderTopNav links={headerLinks} />
        <HeaderBottomNav links={headerLinks} />
      </div>
      <div className="flex flex-col pl-[89px] lg:max-w-[758px] mb-[90px]">
        <h2 className="font-extrabold text-[36px] text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]">
          Создаем будущее своими руками
        </h2>
        <p className="font-semibold text-[20px] text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] ">
          Директор ГМТ Давид Бирагов принял участие в форуме среднего
          профессионального образования, организатором которого выступает
          Министерство просвещения России при поддержке Правительства Калужской
          области.
        </p>
      </div>
    </div>
  );
}
