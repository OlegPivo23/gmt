import Image from "next/image";
import CardComponent from "../cards/CardComponent";
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
          <div className="absolute top-1/2 -translate-y-1/2 left-[25px] cursor-pointer">
            <Image
              src="/icons/card/card-arrow-black.svg"
              alt="Левая стрелка"
              width={12}
              height={24}
            />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-[25px] cursor-pointer">
            <Image
              src="/icons/card/card-arrow-black.svg"
              alt="Правая стрелка"
              width={12}
              height={24}
              className="rotate-180"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
