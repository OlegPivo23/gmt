import TitleComponent from "../UI/title/TitleComponent";

const links = [1, 2, 3];

export default function LinksComponent() {
  return (
    <div className="flex flex-col gap-[45px]">
      <TitleComponent>Ссылки</TitleComponent>
      <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-3  gap-4">
        {links.map((item, i) => (
          <div
            key={i}
            className="rounded-[57px] max-w-[335px] w-full h-[638px] bg-[#d2d2d2] cursor-pointer flex-shrink-0"
          ></div>
        ))}
      </div>
    </div>
  );
}
