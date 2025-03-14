"use client";

import "./main.scss";
import MainLayout from "@/components/layouts/MainLayout";
import SpecialtiesComponent from "@/components/specialties/SpecialtiesComponent";
import MovieAboutComponent from "@/components/movieAbout/MovieAboutComponent";
import { useNavigation } from "@/hooks/useNavigation";

export default function MainPage() {
  const navigateTo = useNavigation();

  return (
    <div className="page">
      <MainLayout>
        <div className="flex flex-col gap-[40px] md:gap-[50px] lg:gap-[90px] px-4 md:px-[30px] lg:px-[90px]">
          <section>
            <SpecialtiesComponent />
          </section>
          <section>
            <MovieAboutComponent />
          </section>
          <div
            className="cursor-pointer"
            onClick={() => navigateTo("/education")}
          >
            <img
              src="/img/professionalism/professionalitet-short.png"
              alt="Профессионалитет"
            />
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
