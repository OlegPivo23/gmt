import SecondaryLayout from "@/components/layouts/SecondaryLayout";
import TitleComponent from "@/components/UI/title/TitleComponent";
import "../../app/main.scss";
import CardComponent from "@/components/cards/CardComponent";
import { cards, tables, texts } from "@/db/tableData";
import EducationTableComponent from "@/components/education/EducationTableComponent";

export default function EducationPage() {
  return (
    <div className="page">
      <SecondaryLayout>
        <div className="flex flex-col gap-5 lg:gap-[70] px-[20px] lg:px-[90px]">
          {/* блок документов */}
          <div>
            <TitleComponent>Документы</TitleComponent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-[25px]">
              {cards
                .map((item, idx) => (
                  <CardComponent
                    key={idx}
                    hasGradient={true}
                    docBtn={true}
                    borderRadius="30px"
                    footerText={item}
                  />
                ))
                .slice(0, 6)}
            </div>
          </div>
          {/* блок документов */}

          {/* Текстовый блок */}
          <div>
            <h2 className="font-montserrat font-bold text-[15px] mb-[17px] ">
              <span className="font-black ">
                Реализуемый уровень образования 
              </span>{" "}
              — среднее профессиональное образование:{" "}
              <span className="block">
                программы подготовки специалистов среднего звена (ППССЗ) и
                программы подготовки квалифицированных рабочих, служащих
                (ППКРС).
              </span>
            </h2>
            <div className="flex flex-col gap-4">
              {texts.map((item, idx) => (
                <p
                  key={idx}
                  className="last:mt-[17px] font-montserrat font-bold text-[15px]"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          {/* Текстовый блок */}

          {/* Блок карточек */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-[25px]">
            {cards
              .map((item, idx) => (
                <CardComponent
                  key={idx}
                  hasGradient={true}
                  docBtn={true}
                  borderRadius="30px"
                  footerText={item}
                />
              ))
              .slice(0, 6)}
          </div>
          {/* Блок карточек */}

          {/* Блок табличеек */}
          <EducationTableComponent tables={tables} />
          {/* Блок табличеек */}

          {/* карточки */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-b  pb-10">
            {cards
              .map((item, idx) => (
                <CardComponent
                  key={idx}
                  hasGradient={true}
                  borderRadius="30px"
                  docBtn={true}
                  footerText={item}
                />
              ))
              .slice(0, 2)}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-b  pb-10">
            {cards.map((item, idx) => (
              <CardComponent
                key={idx}
                hasGradient={true}
                borderRadius="30px"
                docBtn={true}
                footerText={item}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  ">
            {cards.map((item, idx) => (
              <CardComponent
                key={idx}
                hasGradient={true}
                borderRadius="30px"
                docBtn={true}
                footerText={item}
              />
            ))}
          </div>
          {/* Карточки */}

          {/* Текст */}
          <TitleComponent>Дополнительное образование.</TitleComponent>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-[19px] font-montserrat font-bold">
                Ансамбль народного танца ВОДНПТ.
              </p>
              <p className="text-[19px] font-montserrat font-bold">
                График работы: вторник, четверг, суббота с 15:30 до 18:00.
              </p>
            </div>
            <div>
              <p className="text-[19px] font-montserrat font-bold">Вокал.</p>
              <p className="text-[19px] font-montserrat font-bold">
                График работы: понедельник, среда, пятница с 15:30 до 18:00.
              </p>
            </div>
            <div>
              <p className="text-[19px] font-montserrat font-bold">КВН.</p>
              <p className="text-[19px] font-montserrat font-bold">
                Занятия проводятся ежедневно после четвёртой пары.
              </p>
            </div>
            <div>
              <p className="text-[19px] font-montserrat font-bold">
                  Секция для занятий техническим творчеством — радиоклуб
                «Ирбис». 
              </p>
              <p className="text-[19px] font-montserrat font-bold">
                http://qrpclub.ru/   
              </p>
              <p className="text-[19px] font-montserrat font-bold">
                График занятий: суббота, воскресенье с 15:00 до 17:00. 
              </p>
            </div>
            <div>
              <p className="text-[19px] font-montserrat font-bold">
                Карате «Киокушин». 
              </p>
              <p className="text-[19px] font-montserrat font-bold">
                График занятий: вторник, четверг, суббота с 17:00 до 21:00.
              </p>
            </div>
            <div>
              <p className="text-[19px] font-montserrat font-bold">
                Грепплинг.
              </p>
              <p className="text-[19px] font-montserrat font-bold">
                График работы: понедельник, среда, пятница с 17:00 до 21:00.
              </p>
            </div>
            <div>
              <p className="text-[19px] font-montserrat font-bold">Армспорт.</p>
              <p className="text-[19px] font-montserrat font-bold">
                Занятия проводятся с понедельника по пятницу с 16:00 до 21:00.
              </p>
            </div>
          </div>
          {/* Текст */}
        </div>
      </SecondaryLayout>
    </div>
  );
}
