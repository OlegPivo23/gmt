import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { headerLinks } from "@/db/headerInfo";

export default function HeaderBottomNav({ links }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLgScreen, setIsLgScreen] = useState(false);

  const headerLinksLg = headerLinks.slice(0, 3);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const router = useRouter();
  const handleLogoClick = () => {
    router.push("/");
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLgScreen(window.innerWidth >= 1024);
    };

    checkScreenSize(); // Check once on mount
    window.addEventListener("resize", checkScreenSize); // Add event listener

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row lg:gap-8 lg:items-center px-4 sm:px-6 lg:px-8 py-4 relative bg-white ">
      <div className="flex gap-6 lg:gap-8 ml-[87px] items-center">
        <Image
          src="/img/header/logo.png"
          alt="Логотип"
          width={60}
          height={60}
          className="p-1 w-[60px] shadow-md bg-white rounded-full cursor-pointer"
          onClick={handleLogoClick}
        />
        <button className="p-2" onClick={toggleMenu}>
          <Image
            src="/icons/header/burger-black.svg"
            alt="Меню"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full bg-white text-black shadow-lg p-6 z-50 flex flex-col items-center ">
          <button className="absolute top-4 right-4" onClick={toggleMenu}>
            X
          </button>
          <ul className="flex flex-col gap-6 mt-12">
            {(isLgScreen ? headerLinksLg : headerLinks).map((item, i) => (
              <li key={i}>
                <Link
                  href={item.link}
                  className="block font-bold text-black text-lg hover:text-orange-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <nav className="hidden lg:block">
        <ul className="flex gap-6 lg:gap-8 items-center">
          {links.map((item, i) => (
            <li key={i}>
              <Link
                href={item.link}
                className="font-montserrat font-extrabold text-sm lg:text-base  hover:text-orange-200 transition-colors"
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
