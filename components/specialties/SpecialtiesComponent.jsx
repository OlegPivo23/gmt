import CardComponent from "../cards/CardComponent";
import ShowButton from "../UI/button/ShowButtonComponent";
import TitleComponent from "../UI/title/TitleComponent";

const specialities = [
  {
    title: "Туризм и гостеприимство",
    description: "Описание специальности",
    bgImage: "/img/specialities/bg-img1.png",
    height: "254px",
    buttonText: "Подробнее",
  },
  {
    title: "Туризм и гостеприимство",
    description: "Описание специальности",
    bgImage: "/img/specialities/bg-img1.png",
    height: "254px",
    buttonText: "Подробнее",
  },
  {
    title: "Туризм и гостеприимство",
    description: "Описание специальности",
    bgImage: "/img/specialities/bg-img1.png",
    height: "254px",
    buttonText: "Подробнее",
  },
  {
    title: "Туризм и гостеприимство",
    description: "Описание специальности",
    bgImage: "/img/specialities/bg-img1.png",
    height: "254px",
    buttonText: "Подробнее",
  },
];

export default function SpecialtiesComponent() {
  return (
    <div className="flex flex-col gap-[25px]">
      <div className="flex justify-between items-center">
        <TitleComponent>Наши специальности</TitleComponent>
        <ShowButton>Показать все</ShowButton>
      </div>
      <div className="flex flex-col gap-[35px]">
        {specialities.map((item, i) => (
          <CardComponent
            key={i}
            title={item.title}
            description={item.description}
            bgImage={item.bgImage}
            height={item.height}
            buttonText={item.buttonText}
          />
        ))}
      </div>
    </div>
  );
}
