import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeaderTopNav({ links }) {
  

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
      </nav>
    </div>
  );
}
