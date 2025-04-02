"use client";

import "./main.scss";
import MainLayout from "@/components/layouts/MainLayout";
import SpecialtiesComponent from "@/components/specialties/SpecialtiesComponent";
import MovieAboutComponent from "@/components/movieAbout/MovieAboutComponent";
import { useNavigation } from "@/hooks/useNavigation";
import NewsComponent from "@/components/news/NewsComponent";
import ProfessionalismBtnComponent from "@/components/professionalismGroup/ProfessionalismBtnComponent";

export default function MainPage() {
  const navigateTo = useNavigation();

  return (
    <div className="page">
      <MainLayout>
        <div className="flex flex-col gap-[40px] md:gap-[50px] lg:gap-[90px] px-4 md:px-[30px] lg:px-[90px]">
          <section>
            <ProfessionalismBtnComponent />
          </section>
          <section>
            <NewsComponent />
          </section>
          <section>
            <SpecialtiesComponent />
          </section>
          <section>
            <MovieAboutComponent />
          </section>
        </div>
      </MainLayout>
    </div>
  );
}
