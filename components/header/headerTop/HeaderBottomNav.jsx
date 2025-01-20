import Link from "next/link";

import "../../../app/main.scss";

export default function HeaderBottomNav({ links }) {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-[34px]  items-center lg:items-center ">
      <div className="pl-[87px] pt-[23px] flex items-center gap-[50px]">
        <img
          src="/img/header/logo.png"
          alt="logo"
          className="p-[4px_1px] w-[60px] shadow-[0_0_4px_0_rgba(0,0,0,0.3)] bg-white rounded-[30px]"
        />
        <img
          src="/icons/header/burger.svg"
          alt="burger button"
          className="cursor-pointer"
        />
      </div>
      <div>
        <ul className="flex gap-[50px] items-center">
          {links?.map((item, i) => (
            <li key={i} className="font-extrabold text-[15px] text-white">
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
