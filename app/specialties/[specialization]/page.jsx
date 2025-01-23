import MainLayout from "@/components/layouts/MainLayout";
import OtherSpecialtiesComponent from "@/components/otherSpecialties/OtherSpecialtiesComponent";
import SpecializationInfoComponent from "@/components/specializationInfo/SpecializationInfoComponent";

export default function SpecializationPage({ params, searchParams }) {
  const { specialization } = params;
  const { title, description, bgImage } = searchParams;

  return (
    <div className="page">
      <MainLayout>
        <section>
          <SpecializationInfoComponent />
        </section>
        <section>
          <OtherSpecialtiesComponent />
        </section>
      </MainLayout>
    </div>
  );
}
