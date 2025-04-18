"use client";
import ContactsComponent from "../contacts/ContactsComponent";
import LinksComponent from "../links/LinksComponent";
import HeaderBottomNav from "../header/headerTop/HeaderBottomNav";
import { headerBottomLinks, headerLinks, headerAllLinks } from "@/db/headerInfo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "../header/header.module.scss";

export default function SecondaryLayout({ children }) {
  const pathname = usePathname();

  // Find the current link object from headerLinks based on the pathname
  const currentLink = headerAllLinks.find((link) => link.link === pathname);

  return (
    <div className="flex flex-col gap-[90px] bg-white">
      <header>
        <HeaderBottomNav links={headerBottomLinks} />
        <div className={style.headerSecondary}>
          <div className="flex flex-col justify-center h-full px-[81px]">
            <h2 className="font-montserrat font-bold text-[30px] md:text-[48px] text-white ">
              {currentLink?.name || "Страница не найдена"}{" "}
              {/* Fallback if no match */}
            </h2>
          </div>
        </div>
      </header>
      {children}
      <footer className="rounded-b-[40px] rounded-t-[40px] flex flex-col gap-[90px] bg-[#fafafa] ">
        <div className="px-4 md:px-[30px] lg:px-[90px]">
          <ContactsComponent />
        </div>
        <div className="px-4 md:px-[30px] lg:px-[90px] bg-[#ffad5b]">
          <LinksComponent />
        </div>
      </footer>
    </div>
  );
}
