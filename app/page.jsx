import "./main.scss";
import MainLayout from "@/components/layouts/MainLayout";
import NewsComponent from "@/components/news/NewsComponent";
import SpecialtiesComponent from "@/components/specialties/SpecialtiesComponent";
import { AdditionallyComponent } from "@/components/additionally/AdditionallyComponent";
import MovieAboutComponent from "@/components/movieAbout/MovieAboutComponent";
import SwiperComponent from "@/components/swiper/SwiperComponent";

export default function MainPage() {
  return (
    <div className="page">
      <MainLayout>
        <div className="flex flex-col gap-[90px] px-4 md:px-[30px] lg:px-[90px]">
          <section>
            <NewsComponent />
          </section>
          <section>
            <SpecialtiesComponent />
          </section>
          <section>
            <AdditionallyComponent />
          </section>
          <section>
            <MovieAboutComponent />
          </section>
        </div>
      </MainLayout>
    </div>
  );
}
