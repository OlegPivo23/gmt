import CardComponent from "../cards/CardComponent";
import TitleComponent from "../UI/title/TitleComponent";

const docs = [
  "Доп. Соглашение от 22.10.2024",
  "Доп. Соглашение от 22.10.2024",
  "Доп. Соглашение от 22.10.2024",
  "Доп. Соглашение от 22.10.2024",
  "Доп. Соглашение от 22.10.2024",
  "Доп. Соглашение от 22.10.2024",
];

export default function ProfessionalismDocsComponent() {
  return (
    <div className="flex flex-col gap-5">
      <TitleComponent>Соглашение о взаимодействии</TitleComponent>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {docs
          .map((item, index) => (
            <CardComponent
              key={index}
              hasGradient={true}
              docBtn={true}
              footerText={item}
              borderRadius="30px"
            />
          ))
          .slice(0, 3)}
      </div>
      <TitleComponent>Управляющая компания</TitleComponent>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {docs.map((item, index) => (
          <CardComponent
            key={index}
            hasGradient={true}
            docBtn={true}
            footerText={item}
            borderRadius="30px"
          />
        ))}
      </div>
    </div>
  );
}
