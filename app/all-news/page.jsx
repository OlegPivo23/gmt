import AllNewsComponent from "@/components/allNews/AllNewsComponent";
import MainLayout from "@/components/layouts/MainLayout";
import PaginationComponent from "@/components/UI/pagination/PaginationComponent";
import "../../app/main.scss";

export default function AllNewsPage() {
  return (
    <div className="page">
      <MainLayout>
        <section className="flex flex-col gap-[40px] md:gap-[90px]">
          <AllNewsComponent />
          <PaginationComponent />
        </section>
      </MainLayout>
    </div>
  );
}
