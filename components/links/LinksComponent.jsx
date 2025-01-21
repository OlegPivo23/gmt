import TitleComponent from "../UI/title/TitleComponent";
const links = [1, 2, 3];
export default function LinksComponent() {
  return (
    <div className="flex flex-col gap-[45px]">
      <TitleComponent>Ссылки</TitleComponent>
      <div className="grid grid-cols-3 justify-between items-center gap-4 ">
        {links.map((item, i) => (
          <div
            key={i}
            className="rounded-[57px] w-[335px] h-[638px] bg-[#d2d2d2] cursor-pointer"
          ></div>
        ))}
      </div>
    </div>
  );
}
