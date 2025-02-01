import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeaderTopNav({ links }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="border-b border-white/25 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center justify-between gap-4 sm:gap-6 lg:gap-8 py-4">
          <div className=" pl-[20px] md:pl-[40px] lg:pl-[140px] flex flex-col md:flex-row gap-4">
            {links?.map((item, i) => (
              <li key={i} className="list-none">
                <Link
                  href={item.link}
                  className="font-bold text-sm text-white hover:text-orange-200 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </div>
        </ul>

        {isMenuOpen && (
          <div className=" bg-white text-black  shadow-lg p-4 absolute top-0 left-0 right-0 z-50 ">
            <ul className="flex flex-col gap-4">
              {links?.map((item, i) => (
                <li key={i} className="list-none">
                  <Link
                    href={item.link}
                    className="block font-bold text-sm hover:text-orange-200 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
