import TitleComponent from "../UI/title/TitleComponent";
const images = [
  "/img/professionalism/career-card.png",
  "/img/professionalism/career-card3.png",
  "/img/professionalism/career-card4.png",
  "/img/professionalism/career-card5.png",
  "/img/professionalism/career-card6.png",
  "/img/professionalism/career-card7.png",
  "/img/professionalism/career-card8.png",
  "/img/professionalism/career-card9.png",
  "/img/professionalism/career-card10.png",
  "/img/professionalism/career-card11.png",
];
export default function CareerCardComponent() {
  return (
    <div className="mt-5">
      <TitleComponent>Карьерная карта</TitleComponent>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mt-4">
        {images.map((item, idx) => (
          <img key={idx} src={item} alt="card image" className="w-full" />
        ))}
      </div>
    </div>
  );
}
