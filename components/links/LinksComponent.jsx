"use client";
import Image from "next/image";
import Link from "next/link";
import TitleComponent from "../UI/title/TitleComponent";
import { useRouter } from "next/navigation";
import { footerLinks } from "@/db/headerInfo";

const links = [
  { text: "О техникуме", link: "/about" },
  { text: "Новости", link: "/news" },
  { text: "Образование", link: "/education" },
  { text: "Контакты", link: "/contacts" },
  { text: "Документы", link: "/documents" },
];

const socialIcons = [
  {
    src: "/icons/footer/tg-icon.png",
    alt: "Telegram",
    link: "https://t.me/your_telegram_link",
  },
  {
    src: "/icons/footer/vk-icon.png",
    alt: "VKontakte",
    link: "https://vk.com/your_vk_link",
  },
];

export default function LinksComponent() {
  const router = useRouter();
  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col gap-[45px]">
      <div className="pt-[40px]">
        <TitleComponent color="#ffffff">Ссылки</TitleComponent>
      </div>

      {/* Сетка ссылок */}
      <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-3 gap-4">
        {footerLinks.map((item, i) => (
          <div
            key={i}
            className={`font-montserrat font-medium text-2xl text-white px-[0] md:px-[50px] cursor-pointer ${
              (i + 1) % 3 !== 0 ? "border-r border-white" : ""
            }`}
          >
            <Link href={item.link}>{item.name}</Link>
          </div>
        ))}
      </div>

      {/* Разделительная линия */}
      <div className="h-[1px] bg-white"></div>

      {/* Футер */}
      <div className="flex justify-between items-center gap-4 pb-6">
        <p className="font-normal text-[11px] text-white">ВГМТ 2025</p>

        {/* Логотип */}
        <Image
          src="/img/header/logo.png"
          alt="Логотип"
          width={60}
          height={60}
          className="p-1 w-[60px] shadow-md bg-white rounded-full cursor-pointer"
          onClick={handleLogoClick}
        />

        {/* Иконки соцсетей */}
        <div className="flex gap-4">
          {socialIcons.map((icon, index) => (
            <Link
              key={index}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={37}
                height={37}
                className="cursor-pointer"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
