import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { headerLinks, headerAllLinks } from "@/db/headerInfo";

export default function HeaderBottomNav({ links }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLgScreen, setIsLgScreen] = useState(false);

  const [isAccessible, setIsAccessible] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("isAccessible") === "true";
    }
    return false;
  });

  const menuRef = useRef(null);

  const headerLinksLg = headerLinks.slice(0, 3);

  const desktopMenuLinks = headerAllLinks.filter(
    (link) => !headerLinksLg.some((lgLink) => lgLink.name === link.name)
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAccessibility = () => {
    setIsAccessible((prev) => {
      const newState = !prev;
      if (newState) {
        document.body.classList.add("accessible");
      } else {
        document.body.classList.remove("accessible");
      }
      localStorage.setItem("isAccessible", newState.toString());
      return newState;
    });
  };

  const router = useRouter();
  const handleLogoClick = () => {
    router.push("/");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isAccessible) {
      document.body.classList.add("accessible");
    } else {
      document.body.classList.remove("accessible");
    }
  }, [isAccessible]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-center px-4 sm:px-6 lg:px-8 py-4 relative bg-white">
      <div className="flex gap-6 lg:gap-8 items-center relative ml-5 lg:ml-[87px]">
        <div>
          <p className="font-bold text-[15px] translate-x-[20px]">ВГМТ</p>
        </div>

        <Image
          src="/img/header/logo.png"
          alt="Логотип"
          width={60}
          height={60}
          className="p-1 w-[60px] shadow-md bg-white rounded-full cursor-pointer"
          onClick={handleLogoClick}
        />

        <button className="p-2" onClick={toggleMenu} aria-label="Открыть меню">
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

      {/* Всплывающее меню */}
      {isMenuOpen && (
        <div className="absolute z-50 top-full left-0 w-full bg-white text-black shadow-lg pl-[30px] lg:pl-[354px]">
          <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-[500px] py-4 lg:py-[27px] items-center">
            {(isLgScreen ? desktopMenuLinks : headerAllLinks).map((item, i) => (
              <li key={i}>
                <Link
                  href={item.link}
                  className="block font-bold text-[15px] lg:text-base hover:text-orange-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Десктопная навигация */}
      <nav className="hidden lg:block">
        <ul className="flex gap-6 lg:gap-8 items-center">
          {headerLinksLg.map((item, i) => (
            <li key={i}>
              <Link
                href={item.link}
                className="font-montserrat font-bold text-[15px] lg:text-base hover:text-orange-500 transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Кнопка для слабовидящих (только на ≥640px) */}
      <button
        onClick={toggleAccessibility}
        className="hidden sm:inline-block px-4 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-700 transition"
      >
        {isAccessible ? "Обычный режим" : "Версия для слабовидящих"}
      </button>
      <div>
        <img src="/img/header/OrdenDN.svg 1.png" alt="" />
      </div>
    </div>
    
  );
}
