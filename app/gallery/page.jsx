import SecondaryLayout from "@/components/layouts/SecondaryLayout";
import TitleComponent from "@/components/UI/title/TitleComponent";
import "../main.scss";
import GalaryComponent from "@/components/galary/GalaryComponent";
import PaginationComponent from "@/components/UI/pagination/PaginationComponent";

export default function GalaryPage() {
  return (
    <div className="page">
      <SecondaryLayout>
        <div className="flex flex-col gap-[48px] px-[20px] lg:px-[71px]">
          <TitleComponent>История техникума в фотографиях</TitleComponent>
          <GalaryComponent />
        </div>
      </SecondaryLayout>
    </div>
  );
}
