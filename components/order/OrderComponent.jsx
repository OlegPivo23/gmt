import CardComponent from "../cards/CardComponent";
import TitleComponent from "../UI/title/TitleComponent";

const cards = [1, 2, 3];

export function OrderComponent() {
  return (
    <div>
      <div className="px-[33px]">
        <TitleComponent>Приказ о зачислении</TitleComponent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:justify-center">
          {cards.map((item, i) => (
            <CardComponent
              key={i}
              bgImage="/img/order/order-img.png"
              maxWidth="453px"
              maxHeight="256px"
            />
          ))}
        </div>
      </div>
      <div className="px-[33px]">
        <TitleComponent>
          Приказ о зачислении на коммерческую форму обучения
        </TitleComponent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:justify-center">
          {cards.map((item, i) => (
            <CardComponent
              key={i}
              bgImage="/img/order/order-img.png"
              maxWidth="453px"
              maxHeight="256px"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
