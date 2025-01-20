import HeaderComponent from "@/components/header/HeaderComponent";

import "./main.scss";
import MainLayout from "@/components/layouts/MainLayout";
import NewsComponent from "@/components/news/NewsComponent";
import SpecialtiesComponent from "@/components/specialties/SpecialtiesComponent";

export default function MainPage() {
  return (
    <div className="page ">
      <MainLayout>
        <div className="flex flex-col gap-[90px] px-[90px]">
          <section>
            <NewsComponent />
          </section>
          <section>
            <SpecialtiesComponent />
          </section>
        </div>
      </MainLayout>
    </div>
  );
}
