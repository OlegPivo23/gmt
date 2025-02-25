import TitleComponent from "../UI/title/TitleComponent";

export default function DocumentsListComponent() {
  const documents = [
    "1. Оригинал аттестата об образовании",
    "2. Паспорт",
    "3. Медицинская справка (форма 086-У)",
    "4. Фотографии (3х4) — 4 штуки",
    "5. Снилс (копия)",
    "6. ИНН (копия)",
    "7. Документ, подтверждающий право преимущественного или первоочередного приема на обучение (справка об участие в специальной военной операции, заверенная воинской частью или военным комиссариатом)",
  ];

  return (
    <section className="">
      <div className=" px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="pl-[0] lg:pl-[83px] flex flex-col gap-6 md:gap-8 lg:gap-10">
          <TitleComponent className="text-2xl sm:text-3xl lg:text-4xl leading-tight">
            Перечень необходимых документов для поступления в образовательное
            учреждение:
          </TitleComponent>

          <ol className="  marker:text-gray-700 marker:font-medium">
            {documents.map((doc, index) => (
              <li
                key={index}
                className="text-gray-800 text-base sm:text-lg lg:text-xl 
                          font-extrabold hover:text-black 
                          transition-colors duration-200"
              >
                <span
                  className={`${
                    index === documents.length - 1 ? "break-words" : ""
                  }`}
                >
                  {doc}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
