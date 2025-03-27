import SecondaryLayout from "@/components/layouts/SecondaryLayout";
import "../main.scss";
import CardComponent from "@/components/cards/CardComponent";

const docs = [{}];
export default function InternationalCooperationPage() {
  return (
    <div className="page">
      <SecondaryLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[20px] md:px-[40px]"></div>
      </SecondaryLayout>
    </div>
  );
}
