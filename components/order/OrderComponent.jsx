import CardComponent from "../cards/CardComponent";
import TitleComponent from "../UI/title/TitleComponent";

const cards = [1, 2, 3];
const orders = [
  {
    img: "/img/order/order-img.png",
    desc: "_174-У от 16.08.2024 г._ЗАЧИСЛЕНИЕ",
    link: "",
  },
  {
    img: "/img/order/order-img.png",
    desc: "_174-У от 16.08.2023 г._ЗАЧИСЛЕНИЕ",
    link: "",
  },
  {
    img: "/img/order/order-img.png",
    desc: "_174-У от 16.08.2022 г._ЗАЧИСЛЕНИЕ",
    link: "",
  },
];

export function OrderComponent() {
  return (
    <div className="flex flex-col gap-[76px]">
      <div className="px-[33px] flex flex-col gap-5">
        <TitleComponent>Приказ о зачислении</TitleComponent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {orders.map((item, i) => (
            <CardComponent
              key={i}
              docBtn="true"
              footerText={item.desc}
              borderRadius="30px"
              className="max-w-[453px] w-full max-h-[256px] h-full"
              bgImage="/img/order/order-img.png"
            />
          ))}
        </div>
      </div>
      <div className="px-[33px] flex flex-col gap-5 ">
        <div className="max-w-[771px]">
          <TitleComponent>
            Приказ о зачислении на коммерческую форму обучения
          </TitleComponent>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 ">
          {orders.map((item, i) => (
            <CardComponent
              key={i}
              docBtn="true"
              borderRadius="30px"
              footerText={item.desc}
              className="max-w-[453px] w-full max-h-[256px] h-full"
              bgImage="/img/order/order-img.png"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
