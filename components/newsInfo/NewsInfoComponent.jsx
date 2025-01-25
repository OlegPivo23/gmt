import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Импортируем модули Navigation и Pagination
import "swiper/css"; // Основные стили Swiper
import "swiper/css/navigation"; // Стили для навигации
import "swiper/css/pagination"; // Стили для пагинации
import NavigationArrowComponent from "../UI/navigationArrow/NavigationArrowComponent";
import "./newsInfo.scss";

// Массив данных для новостей
const newsData = [
  {
    date: "01.01.01",
    images: [
      "/img/news/card-bg.png",
      "/img/news/card-bg.png",
      "/img/news/card-bg.png",
    ], // Массив изображений для слайдера
    title:
      "Студенты ГМТ — победители и призеры XXVI республиканского научного конкурса молодых исследователей «Шаг в будущее Осетии»",
    description: [
      "Учащийся первого курса специальности «Техническая эксплуатация и обслуживание электрического и электромеханического оборудования» Сослан Чибиров победил в номинации «Культурология» с презентацией проекта военно-тактической игры «Страйкбол». Авторы проекта предлагают внедрить игру в качестве первоначальной военной подготовке на базе школ и учреждений СПО. Члены жюри высоко оценили доклад нашего студента и отметили актуальность задумки.",
      "Студент этой же группы Олег Подмазов стал вторым на конкурсе, представив макет брудера для выращивания цыплят. Подготовил ребят преподаватель спецдисциплин Ирбег Борадзов. Первые места на конкурсе также заняли: студентка первого курса специальности «Туризм» Лана Дарчиева с проектом «Меры повышения индекса гостеприимства в РСО-Алания» (педагог Дзерасса Дзагоева) и Олег Тогоев с работой о дефиците йода и гипертиреозе у населения республики (педагог Светлана Макоева).",
    ],
  },
];

export default function NewsInfoComponent() {
  return (
    <>
      {newsData.map((news, index) => (
        <div
          key={index}
          className="border-2 border-opacity-25 border-black rounded-[50px] bg-white px-4 md:px-[41px] py-6 md:py-[51px] mx-4 relative mb-6"
        >
          {/* Дата */}
          <div className="absolute top-4 md:top-[50px] right-4 md:right-[50px] flex items-center">
            <img
              src="/img/news/calendar.png"
              alt="Календарь"
              className="w-6 h-6 md:w-8 md:h-8"
            />
            <span className="p-2 md:p-4 font-medium text-[12px] md:text-[15px] text-black">
              {news.date}
            </span>
          </div>

          {/* Контент */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-[60px] relative">
            {/* Контейнер для Swiper и стрелок */}
            <div className="flex-1 w-full lg:max-w-[50%] relative">
              {/* Swiper с изображениями */}
              <Swiper
                modules={[Navigation, Pagination]} // Подключаем модули Navigation и Pagination
                navigation={{
                  nextEl: `.swiper-button-next-${index}`, // Уникальный класс для кнопки "вперед"
                  prevEl: `.swiper-button-prev-${index}`, // Уникальный класс для кнопки "назад"
                }}
                pagination={{
                  clickable: true, // Делаем пагинацию кликабельной
                  el: `.swiper-pagination-${index}`, // Уникальный класс для пагинации
                  type: "bullets", // Тип пагинации (точки)
                }}
                loop={true} // Зацикливание слайдов
                className="rounded-[30px] md:rounded-[54px] shadow-[0_4px_21px_0_rgba(255,173,91,0.62)]"
              >
                {news.images.map((image, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={image}
                      alt={`Фоновое изображение ${i + 1}`}
                      className="w-full h-full object-cover rounded-[30px] md:rounded-[54px]"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Кастомные стрелки (слева и справа от Swiper) */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-12 md:-left-12 hidden md:block">
                <div
                  className={`pointer-events-auto swiper-button-prev-${index}`}
                >
                  <NavigationArrowComponent
                    direction="left"
                    className="w-8 h-8 md:w-12 md:h-12"
                  />
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-12 md:-right-20 hidden md:block">
                <div
                  className={`pointer-events-auto swiper-button-next-${index}`}
                >
                  <NavigationArrowComponent
                    direction="right"
                    className="w-8 h-8 md:w-12 md:h-12"
                  />
                </div>
              </div>

              <div
                className={`swiper-pagination swiper-pagination-${index} mt-4 flex justify-center space-x-2`}
              ></div>
            </div>

            {/* Текст (справа на больших экранах) */}
            <div className="flex-1 w-full lg:max-w-[50%]">
              <h2 className="font-extrabold text-[24px] md:text-[36px] text-black max-w-[534px] w-full">
                {news.title}
              </h2>
              <div className="flex flex-col gap-4 mt-4">
                {news.description.map((paragraph, i) => (
                  <p
                    key={i}
                    className="font-bold text-[12px] md:text-[15px] text-black"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
