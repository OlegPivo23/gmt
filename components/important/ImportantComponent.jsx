import TitleComponent from "../UI/title/TitleComponent";

export default function ImportantComponent() {
  return (
    <div className="mx-auto border border-black/25 rounded-[60px]  bg-[#D9D9D9]/[0.28] mx-[20px] md:mx-[33px]">
      <div className="flex flex-col gap-[20px] justify-center items-center px-[30px] py-[15px] ">
        <TitleComponent>Важно</TitleComponent>
        <p className="font-medium text-[20px] text-center text-black">
          В соответствии с приказом Министерства просвещения РФ № 245 от
          12.04.2024 года участники специальной военной операции на территории
          Украины, ДНР, ЛНР, Запорожской и Херсонской областей и их дети имеют
          право на зачисление на обучение в первоочередном порядке вне
          зависимости от результатов освоения программы основного общего или
          среднего общего образования
        </p>
      </div>
    </div>
  );
}
