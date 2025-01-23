import CardComponent from "../cards/CardComponent";
import NavigationArrowComponent from "../UI/navigationArrow/NavigationArrowComponent";
import TitleComponent from "../UI/title/TitleComponent";

const specialities = [
  {
    id: 1,
    title: "Земельно-имущественные отношения​",
    description: "Описание специальности",
    bgImage: "/img/news/card-bg.png",
  },
  {
    id: 2,
    title: "Земельно-имущественные отношения2​",
    description: "Описание специальности",
    bgImage: "/img/news/card-bg.png",
  },
  {
    id: 3,
    title: "Земельно-имущественные отношения3​",
    description: "Описание специальности",
    bgImage: "/img/news/card-bg.png",
  },
];

export default function OtherSpecialtiesComponent() {
  return (
    <div className="flex flex-col gap-[25px]">
      <div className="text-center">
        <TitleComponent>Остальные специальности</TitleComponent>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-[50px] relative">
        {specialities.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <CardComponent
              title={item.title}
              description={item.description}
              bgImage={item.bgImage}
              maxWidth="450px"
              maxHeight="390px"
            />
            <NavigationArrowComponent direction="left" />
            <NavigationArrowComponent direction="right" />
          </div>
        ))}
      </div>
    </div>
  );
}
