import TitleComponent from "../UI/title/TitleComponent";

export default function DocumentsListComponent() {
  const documents = [
    "Оригинал аттестата об образовании",
    "Паспорт",
    "Медицинская справка (форма 086-У)",
    "Фотографии (3х4) — 4 штуки",
    "Снилс (копия)",
    "ИНН (копия)",
    "Документ, подтверждающий право преимущественного или первоочередного приема на обучение (справка об участие в специальной военной операции, заверенная воинской частью или военным комиссариатом)",
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
          <TitleComponent className="text-2xl sm:text-3xl lg:text-4xl leading-tight">
            Перечень необходимых документов для поступления в образовательное
            учреждение:
          </TitleComponent>

          <ol className="list-decimal space-y-3 md:space-y-4 lg:space-y-5 pl-4 sm:pl-6 marker:text-gray-700 marker:font-medium">
            {documents.map((doc, index) => (
              <li
                key={index}
                className="text-gray-800 text-base sm:text-lg lg:text-xl 
                          font-medium leading-relaxed hover:text-black 
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
