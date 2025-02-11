import dynamic from "next/dynamic";
import MainLayout from "@/components/layouts/MainLayout";

// Динамический импорт компонентов
const NewsComponent = dynamic(() => import("@/components/news/NewsComponent"), {
  loading: () => <p>Загрузка новостей...</p>,
});

const SpecialtiesComponent = dynamic(
  () => import("@/components/specialties/SpecialtiesComponent"),
  {
    loading: () => <p>Загрузка специализаций...</p>,
  }
);

const MovieAboutComponent = dynamic(
  () => import("@/components/movieAbout/MovieAboutComponent"),
  {
    loading: () => <p>Загрузка информации о фильме...</p>,
  }
);

export default function MainPage() {
  return (
    <div className="page">
      <MainLayout>
        <div className="flex flex-col gap-[40px] md:gap-[90px] px-4 md:px-[30px] lg:px-[90px]">
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
