import Link from "next/link";
import style from "./header.module.scss";

const headerLinks = [
  { name: "Абитуриентам", link: "/applicants" },
  { name: "О техникуме", link: "/about" },
  { name: "Студентам", link: "/students" },
  { name: "Методическая работа", link: "/methodical" },
];

export default function HeaderSecondary() {
  return (
    <div className="bg-[#fff5e9]">
      <div className={style.headerTopSecondary}>
        <div>
          <img
            src="/img/header/logo.png"
            alt="logo"
            className="p-[4px_1px] w-[60px] shadow-[0_0_4px_0_rgba(0,0,0,0.3)] bg-white rounded-[30px]"
          />
        </div>
        <nav>
          <ul className="flex gap-[50px]">
            {headerLinks?.map((item, i) => (
              <li key={i} className="font-extrabold text-[15px] text-black">
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={style.headerSecondary}>
        <div className="flex flex-col  justify-center h-full px-[81px]">
          <h2 className="font-bold text-[48px] text-white mb-4">
            Абитуриентам - бакалавриата
          </h2>
          <span className="font-bold text-[15px] text-white">
            Абитуриентам - бакалавриата
          </span>
        </div>
      </div>
    </div>
  );
}
