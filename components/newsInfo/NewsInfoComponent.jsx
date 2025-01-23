import NavigationArrowComponent from "../UI/navigationArrow/NavigationArrowComponent";

export default function NewsInfoComponent() {
  return (
    <div className="border-2 border-opacity-25 border-black rounded-[50px] bg-white px-[41px] py-[51px] mx-4 relative">
      <div className="absolute top-[50px] right-[50px] flex items-center">
        <img src="/img/news/calendar.png" alt="" />
        <span className="p-4 font-medium text-[15px] text-black">01.01.01</span>
      </div>

      <div className="flex items-center justify-between gap-[60px] relative">
        <div className="flex-1 relative">
          <div className="relative">
            <img
              src="/img/news/card-bg.png"
              alt=""
              className="w-full rounded-[54px] shadow-[0_4px_21px_0_rgba(255,173,91,0.62)] bg-[linear-gradient(180deg,rgba(52,52,52,0.45)_0%,rgba(255,173,91,0.45)_100%)]"
            />
            {/* Navigation Arrow positioned outside the image */}
            <NavigationArrowComponent
              direction="left"
              className="absolute -left-8 top-1/2 transform -translate-y-1/2"
            />
            <NavigationArrowComponent
              direction="right"
              className="absolute -right-8 top-1/2 transform -translate-y-1/2"
            />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="font-extrabold text-[36px] text-black max-w-[534px] w-full">
            Студенты ГМТ — победители и призеры XXVI республиканского научного
            конкурса молодых исследователей «Шаг в будущее Осетии»
          </h2>
          <div className="flex flex-col gap-4 mt-4">
            <p className="font-bold text-[15px] text-black">
              Учащийся первого курса специальности «Техническая эксплуатация и
              обслуживание электрического и электромеханического оборудования»
              Сослан Чибиров победил в номинации «Культурология» с презентацией
              проекта военно-тактической игры «Страйкбол». Авторы проекта
              предлагают внедрить игру в качестве первоначальной военной
              подготовке на базе школ и учреждений СПО. Члены жюри высоко
              оценили доклад нашего студента и отметили актуальность задумки.
            </p>
            <p className="font-bold text-[15px] text-black">
              Студент этой же группы Олег Подмазов стал вторым на конкурсе,
              представив макет брудера для выращивания цыплят. Подготовил ребят
              преподаватель спецдисциплин Ирбег Борадзов. Первые места на
              конкурсе также заняли: студентка первого курса специальности
              «Туризм» Лана Дарчиева с проектом «Меры повышения индекса
              гостеприимства в РСО-Алания» (педагог Дзерасса Дзагоева) и Олег
              Тогоев с работой о дефиците йода и гипертиреозе у населения
              республики (педагог Светлана Макоева).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
