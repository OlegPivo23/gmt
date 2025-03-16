"use client";
import CardComponent from "@/components/cards/CardComponent";
import MainLayout from "@/components/layouts/MainLayout";
import TitleComponent from "@/components/UI/title/TitleComponent";
import "../main.scss";
import { useNavigation } from "@/hooks/useNavigation";
import { specialities } from "@/db/specializationData";
import "./allSpecialties.scss";

export default function AllSpecialtiesPage() {
  const navigateTo = useNavigation();

  const handleCardClick = (speciality) => {
    navigateTo(`/specialties/${speciality.id}`, {
      title: speciality.title,
      description: speciality.description,
      bgImage: speciality.bgImage,
    });
  };

  return (
    <div className="page">
      <MainLayout>
        <div className="flex flex-col gap-[25px] px-[20px] lg:px-[90px]">
          <TitleComponent>Все специальности</TitleComponent>
          <div className="specialties-grid">
            {specialities.map((card) => (
              <div
                onClick={() => handleCardClick(card)}
                key={card.id}
                className="md:grid-cols-1"
              >
                <CardComponent
                  title={card.title}
                  bgImage={card.bgImage}
                  borderRadius="30px"
                  maxHeight="220px"
                  hasGradient="true"
                />
              </div>
            ))}
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
