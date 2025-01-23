import CardComponent from "../cards/CardComponent";
import NavigationArrowComponent from "../UI/navigationArrow/NavigationArrowComponent";
import TitleComponent from "../UI/title/TitleComponent";


const cards = [
  "/img/news/card-bg.png",
  "/img/news/card-bg.png",
  "/img/news/card-bg.png",
];

export function AdditionallyComponent() {
  return (
    <div className="flex flex-col gap-[25px]">
      <TitleComponent>Дополнительно</TitleComponent>
      <div className="border border-[rgba(0,0,0,0.25)] rounded-[30px]">
        <div className="px-[81px] py-[43px] grid grid-cols-3 gap-[50px] relative">
          {cards.map((item, i) => (
            <div key={i}>
              <CardComponent maxWidth="380px" bgImage={item} />
            </div>
          ))}
          <NavigationArrowComponent direction="left" />
          <NavigationArrowComponent direction="right" />
        </div>
      </div>
    </div>
  );
}
