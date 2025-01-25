import CardComponent from "../cards/CardComponent";
import NavigationArrowComponent from "../UI/navigationArrow/NavigationArrowComponent";
import TitleComponent from "../UI/title/TitleComponent";

const cards = [
  {
    title: "Заголовок новости",
    description: "Описание новости",
    bgImg: "/img/news/card-bg.png",
  },
  {
    title: "Заголовок новости",
    description: "Описание новости",
    bgImg: "/img/news/card-bg.png",
  },
  {
    title: "Заголовок новости",
    description: "Описание новости",
    bgImg: "/img/news/card-bg.png",
  },
];

export default function OtherNewsComponent() {
  return (
    <div>
      <div className="flex justify-center">
        <TitleComponent>Остальные новости</TitleComponent>
      </div>
      <div className="px-[81px] py-[43px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] relative">
        {cards.map((item, i) => (
          <div key={i}>
            <CardComponent
              title={item.title}
              description={item.description}
              maxWidth="450px"
              bgImage={item.bgImg}
            />
            <NavigationArrowComponent direction="left" />
            <NavigationArrowComponent direction="right" />
          </div>
        ))}
      </div>
    </div>
  );
}
