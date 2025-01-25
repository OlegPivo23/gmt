import HeaderBottomNav from "./headerTop/HeaderBottomNav";
import HeaderTopNav from "./headerTop/HeaderTopNav";
import style from "./header.module.scss"; 

const headerLinks = [
  { name: "Абитуриентам", link: "/applicants" },
  { name: "О техникуме", link: "/about" },
  { name: "Студентам", link: "/students" },
  { name: "Методическая работа", link: "/methodical" },
];

export default function Header() {
  return (
    <header className={style.header}>
      <div>
        <HeaderTopNav links={headerLinks} />
        <HeaderBottomNav links={headerLinks} />
      </div>
      <div className="px-6 sm:px-8 lg:px-12 xl:pl-[89px] lg:max-w-[758px] mb-12 lg:mb-[90px]">
        <h2 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white text-shadow">
          Создаем будущее своими руками
        </h2>
        <p className="font-semibold text-base sm:text-lg lg:text-xl text-white text-shadow mt-4">
          Директор ГМТ Давид Бирагов принял участие в форуме среднего
          профессионального образования, организатором которого выступает
          Министерство просвещения России при поддержке Правительства Калужской
          области.
        </p>
      </div>
    </header>
  );
}
