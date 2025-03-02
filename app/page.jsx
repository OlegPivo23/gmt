import "./main.scss";
import MainLayout from "@/components/layouts/MainLayout";
import NewsComponent from "@/components/news/NewsComponent";
import SpecialtiesComponent from "@/components/specialties/SpecialtiesComponent";
import MovieAboutComponent from "@/components/movieAbout/MovieAboutComponent";
import MyComponent from "@/components/header/PDF";
import TestComponent from "@/components/test/Test";

export default function MainPage() {
  return (
    <div className="page">
      <MainLayout>
        <div className="flex flex-col gap-[40px] md:gap-[50px] lg:gap-[90px] px-4 md:px-[30px] lg:px-[90px]">
          <section>
            <NewsComponent />
          </section>
          <section>
            <SpecialtiesComponent />
          </section>
          {/* <section>
            <AdditionallyComponent />
          </section> */}
          <section>
            <MovieAboutComponent />
          </section>
        </div>
      </MainLayout>
    </div>
  );
}
