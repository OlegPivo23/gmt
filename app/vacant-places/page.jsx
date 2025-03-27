import SecondaryLayout from "@/components/layouts/SecondaryLayout";
import "../main.scss";
import CardComponent from "@/components/cards/CardComponent";

const docs = [{}];
export default function VacantPlacesPage() {
  return (
    <div className="page">
      <SecondaryLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[20px] md:px-[40px]">
          <CardComponent
            className="max-w-[467px] w-full max-h-[251px] h-full"
            borderRadius="30px"
            buttonText={true}
            footerText={"Документ"}
            hasGradient="true"
          />
        </div>
      </SecondaryLayout>
    </div>
  );
}
