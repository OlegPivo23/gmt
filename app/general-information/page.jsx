import SecondaryLayout from "@/components/layouts/SecondaryLayout";
import "../main.scss";

export default function GeneralInformationPage() {
  return (
    <div className="page">
      <SecondaryLayout>
        <div className="px-5 md:px-10 relative flex justify-between items-start">
          <div className="flex flex-col gap-6 max-w-[688px] w-full">
            <div className="pb-2">
              <p className="font-bold">
                Полное наименование образовательной организации
              </p>
              <p>
                Государственное бюджетное профессиональное образовательное
                учреждение Владикавказский государственный индустриальный
                техникум
              </p>
            </div>

            <div className="pb-2">
              <p className="font-bold">
                Сокращенное наименование образовательной организации
              </p>
              <p>ВГИТ</p>
            </div>

            <div className="pb-2">
              <p className="font-bold">
                Дата создания образовательной организации
              </p>
              <p>5 апреля 1931 г.</p>
            </div>

            <div className="pb-2">
              <p className="font-bold">
                Информация об учредителе образовательной организации
              </p>
              <p>
                Функции и полномочия учредителя осуществляет Министерство
                образования и науки Республики Северная Осетия — Алания
              </p>
              <p>
                Юридический адрес: 362040, РСО-Алания, г. Владикавказ, пр.
                Коста, 15
              </p>
              <p>Тел.: 8(8672)29-15-15</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@mon.alania.gov.ru"
                  className="text-blue-500 underline"
                >
                  info@mon.alania.gov.ru
                </a>
              </p>
              <p>
                Адрес официального сайта учредителя:{" "}
                <a
                  href="http://mon.alania.gov.ru"
                  className="text-blue-500 underline"
                >
                  http://mon.alania.gov.ru
                </a>
              </p>
            </div>

            <div className="pb-2">
              <p className="font-bold">
                Представительства и филиалы образовательной организации
              </p>
              <p>Отсутствуют</p>
            </div>

            <div className="pb-2">
              <p className="font-bold">
                Местонахождение образовательной организации
              </p>
              <p>362003, РСО-Алания, г. Владикавказ, пр. Коста, 93</p>
            </div>

            <div className="pb-2">
              <p className="font-bold">Режим и график работы</p>
              <p>Понедельник - Пятница: 08:45 – 16:45</p>
              <p>Выходные дни: Суббота, Воскресенье</p>
            </div>

            <div className="pb-2">
              <p className="font-bold">Контактные телефоны</p>
              <p>Тел.: 8(8672)33-13-53</p>
              <p>Факс: 8(8672)33-13-53</p>
            </div>

            <div className="pb-2">
              <p className="font-bold">
                Адрес официального сайта образовательной организации
              </p>
              <p>
                <a href="https://vmit.ru" className="text-blue-500 underline">
                  https://vmit.ru
                </a>
              </p>
            </div>
          </div>
          <img
            src="/img/general-information/big-logo.png"
            alt="logo"
            className="absolute right-4 top-4 hidden lg:block"
          />
        </div>
      </SecondaryLayout>
    </div>
  );
}
