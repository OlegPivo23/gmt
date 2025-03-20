"use client";
import style from "./header.module.scss";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const headerLinks = [
  { name: "Абитуриентам", link: "/applicants" },
  { name: "Руководство техникума", link: "/guide" },
  { name: "О техникуме", link: "/about" },
  { name: "Студентам", link: "/students" },
  // { name: "Методическая работа", link: "/methodical" },
  { name: "Галерея", link: "/gallery" }, // Исправлено /galary → /gallery
  { name: "Документы", link: "/documents" },
  { name: "Материально-техническое обеспечение", link: "/logistical-support" },
  {
    name: "Финансово-хозяйственная деятельность",
    link: "/financial-economic-activities",
  },
];

const pageDescriptions = {
  "/applicants": "Абитуриентам - бакалавриата",
  "/about": "О техникуме - информация о нашем учебном заведении",
  "/students": "Студентам - полезная информация для студентов",
  "/methodical": "Методическая работа - материалы для преподавателей",
  "/guide": "Педагогический состав",
  "/gallery": "Галерея - фотографии и события техникума", // Исправлено /galary → /gallery
  "/documents": "Студентам",
  "/logistical-support": "О техникуме",
  "/financial-economic-activities": "О техникуме",
};

export default function HeaderSecondary() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const currentDescription = pageDescriptions[pathname];

  return (
    <div className="bg-[#fff5e9]">
      <div className={style.headerTopSecondary}>
        <div>
          <Link href={"/"}>
            <img
              src="/img/header/logo.png"
              alt="logo"
              className="p-[4px_1px] w-[60px]  "
            />
          </Link>
        </div>

        <nav className="hidden sm:block">
          <ul className="flex gap-[50px]">
            {headerLinks?.slice(0, 5).map((item, i) => (
              <li key={i} className="font-extrabold text-[15px] text-black">
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Открыть меню"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white z-50 shadow-lg">
          <nav>
            <ul className="flex flex-col  p-4">
              {headerLinks?.map((item, i) => (
                <li key={i} className="w-full ">
                  <Link
                    href={item.link}
                    className="block py-4 font-extrabold text-[15px] text-black hover:bg-gray-100"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      <div className={style.headerSecondary}>
        <div className="flex flex-col justify-center h-full px-[81px]">
          <h2 className="font-bold text-[30px] md:text-[48px] text-white mb-4">
            {headerLinks.find((link) => link.link === pathname)?.name}
          </h2>
          <span className="font-bold text-[15px] text-white">
            {currentDescription}
          </span>
        </div>
      </div>
    </div>
  );
}
