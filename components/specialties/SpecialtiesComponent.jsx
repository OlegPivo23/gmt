import CardComponent from "../cards/CardComponent";
import ShowButton from "../UI/button/ShowButtonComponent";
import TitleComponent from "../UI/title/TitleComponent";

export default function SpecialtiesComponent() {
  return (
    <div className="flex flex-col gap-[25px]">
      <div className="flex justify-between items-center">
        <TitleComponent>Наши специальности</TitleComponent>
        <ShowButton>Показать все</ShowButton>
      </div>
      <div>
        <CardComponent
          title={"Туризм и гостеприимство"}
          description={"Описание специальности"}
          bgImage={"/img/specialities/bg-img1.png"}
          height="254px"
        />
      </div>
    </div>
  );
}
