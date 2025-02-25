'use client'
import { AboutTextComponent } from "@/components/about/AboutTextComponent";
import GalaryComponent from "@/components/galary/GalaryComponent";
import SecondaryLayout from "@/components/layouts/SecondaryLayout";
import ShowButton from "@/components/UI/button/ShowButtonComponent";
import TitleComponent from "@/components/UI/title/TitleComponent";
import { useNavigationHandler } from "@/hooks/useNavigationHandler";
import '../main.scss'

export default function AboutPage() {
  const { navigateTo } = useNavigationHandler();

  return (
    <div className="page">
      <SecondaryLayout>
        <div className="flex flex-col gap-[20px] px-[20px] lg:px-[90px]">
          <TitleComponent>История техникума</TitleComponent>
          <AboutTextComponent />
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <TitleComponent>Галерея</TitleComponent>
              <ShowButton onClick={() => navigateTo("/galary")}>
                Показать все
              </ShowButton>
            </div>
            <GalaryComponent />
          </div>
        </div>
      </SecondaryLayout>
    </div>
  );
}
