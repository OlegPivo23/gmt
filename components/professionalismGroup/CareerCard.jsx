import TitleComponent from "../UI/title/TitleComponent";

export default function CareerCardComponent() {
  return (
    <div>
      <TitleComponent>Карьерная карта</TitleComponent>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <img src="/img/professionalism/career-card.png" alt="career card" />
        <img src="/img/professionalism/career-card.png" alt="career card" />
        <img src="/img/professionalism/career-card.png" alt="career card" />
        <img src="/img/professionalism/career-card.png" alt="career card" />
        <img src="/img/professionalism/career-card.png" alt="career card" />
        <img src="/img/professionalism/career-card.png" alt="career card" />
      </div>
    </div>
  );
}
