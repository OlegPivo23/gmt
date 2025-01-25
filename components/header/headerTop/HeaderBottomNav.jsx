import Link from "next/link";
import Image from "next/image";

export default function HeaderBottomNav({ links }) {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-8 items-center lg:items-center px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex items-center gap-6 lg:gap-8">
        <Image
          src="/img/header/logo.png"
          alt="Логотип"
          width={60}
          height={60}
          className="p-1 w-[60px] shadow-md bg-white rounded-full"
        />
        <button className="lg:hidden p-2">
          <Image
            src="/icons/header/burger.svg"
            alt="Меню"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </button>
      </div>
      <nav className="hidden lg:block">
        <ul className="flex gap-6 lg:gap-8 items-center">
          {links?.map((item, i) => (
            <li key={i}>
              <Link
                href={item.link}
                className="font-extrabold text-sm lg:text-base text-white hover:text-orange-200 transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
