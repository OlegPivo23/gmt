"use client";
import HeaderBottomNav from "@/components/header/headerTop/HeaderBottomNav";
import MainLayout from "@/components/layouts/MainLayout";
import ProfessionalismBanner from "@/components/professionalismGroup/ProfessionalismBanner";
import "../../app/main.scss";
import CareerCardComponent from "@/components/professionalismGroup/CareerCard";
import ProfessionalismDocsComponent from "@/components/professionalismGroup/ProfessionalismDocsComponent";
import LinksComponent from "@/components/links/LinksComponent";
import ContactsComponent from "@/components/contacts/ContactsComponent";

export default function ProfessionalismPage() {
  return (
    <div className="page">
      <div>
        <HeaderBottomNav />
        <ProfessionalismBanner />
      </div>
      <div className="bg-white px-5 md:px-[40px] lg:px-[90px] flex flex-col gap-5">
        <CareerCardComponent />
        <ProfessionalismDocsComponent />
      </div>
      <footer className="rounded-b-[40px] rounded-t-[40px]  flex flex-col gap-[90px] bg-[#fafafa] ">
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
