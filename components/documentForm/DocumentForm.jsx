import TitleComponent from "../UI/title/TitleComponent";
import Image from "next/image";

export default function DocumentForm() {
  return (
    <div className="flex flex-col gap-[37px] justify-center items-center mx-auto">
      <TitleComponent>Заочная форма обучения (11 класс)</TitleComponent>
      <Image
        src="/img/documentForm/form-example.png"
        alt="Форма документа"
        width={1256}
        height={1154}
        className="object-cover"
      />
    </div>
  );
}
