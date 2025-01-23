import AllNewsComponent from "@/components/allNews/AllNewsComponent";
import MainLayout from "@/components/layouts/MainLayout";
import PaginationComponent from "@/components/UI/pagination/PaginationComponent";

export default function AllNewsPage() {
  return (
    <div className="page">
      <MainLayout>
        <section className="flex flex-col gap-[90px]">
          <AllNewsComponent />
          <PaginationComponent />
        </section>
      </MainLayout>
    </div>
  );
}
