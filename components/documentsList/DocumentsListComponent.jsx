import TitleComponent from "../UI/title/TitleComponent";

export default function DocumentsListComponent() {
  const documents = [
    "Оригинал аттестата об образовании",
    "Паспорт ",
    "Медицинская справка (форма 086-У)",
    "Фотографии (3х4) — 4 штуки",
    "Снилс (копия)",
    "ИНН (копия)",
    "Документ, подтверждающий право преимущественного или первоочередного приема на обучение (справка об участие в специальной военной операции, заверенная воинской частью или военным комиссариатом)",
  ];

  return (
    <div>
      <div className="mx-[83px] flex flex-col gap-[43px]">
        <TitleComponent>
          Перечень необходимых документов для поступления в образовательное
          учреждение:
        </TitleComponent>
        <ol className="list-decimal pl-5">
          {documents.map((doc, index) => (
            <li key={index} className="font-bold text-[20px] text-black">
              {doc}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
