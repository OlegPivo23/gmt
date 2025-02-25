import CardComponent from "../cards/CardComponent";
import TitleComponent from "../UI/title/TitleComponent";

const cards = [1, 2, 3];

export function OrderComponent() {
  return (
    <div className="flex flex-col gap-[76px]">
      <div className="px-[33px] flex flex-col gap-5">
        <TitleComponent>Приказ о зачислении</TitleComponent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((item, i) => (
            <CardComponent
              key={i}
              className="max-w-auto lg:max-w-[300px] max-h-[180px] "
              bgImage="/img/order/order-img.png"
            />
          ))}
        </div>
      </div>
      <div className="px-[33px] flex flex-col gap-5">
        <TitleComponent>
          Приказ о зачислении на коммерческую форму обучения
        </TitleComponent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 ">
          {cards.map((item, i) => (
            <CardComponent
              key={i}
              className="max-w-auto lg:max-w-[300px] max-h-[180px] "
              bgImage="/img/order/order-img.png"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
