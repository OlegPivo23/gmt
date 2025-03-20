"use client";
import CardComponent from "@/components/cards/CardComponent";
import MainLayout from "@/components/layouts/MainLayout";
import TitleComponent from "@/components/UI/title/TitleComponent";
import "../main.scss";
import SecondaryLayout from "@/components/layouts/SecondaryLayout";
import DocumentsMenuComponent from "@/components/documentsMenu/DocumentsMenuComponent";
import { useSelector } from "react-redux";


const docs1 = [
  {
    text: "Устав",
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2018/04/Ustav-2015.pdf",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Лицензия",
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2019/02/Litsenziya-2016.pdf",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Лицензия. Приложение 2",
    link: "http://xn--b1ae1achs.xn--p1ai/liczenziya-prilozhenie-2/",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Выписка из реестра лицензий",
    link: "https://www.figma.com/exit?url=http%3A%2F%2Fxn--b1ae1achs.xn--p1ai%2Fvypiska-iz-reestra-liczenzij%2F",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Свидетельство о государственной аккредитации ",
    link: "http://xn--b1ae1achs.xn--p1ai/svidetelstvo-vodnpt/",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Выписка из реестра 2024 (государственная аккредитация)",
    link: "http://xn--b1ae1achs.xn--p1ai/vypiska-iz-reestra-akkreditovannyh-organizaczij-%E2%84%96-a007-01233-15-01164737/",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Правила внутреннего распорядка обучающихся ГБПОУ ВОДНПТ",
    link: "http://xn--b1ae1achs.xn--p1ai/pravila-vnutrennego-rasporyadka-obuchayushhihsya-gbpou-vodnpt-5-pdf-212x300/",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Правила внутреннего трудового распорядка ВОДНПТ",
    link: "http://xn--b1ae1achs.xn--p1ai/pravila-vnutrennego-trudovogo-rasporyadka-gbpou-vodnpt-2/",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Коллективный договор ГБПОУ ВОДНПТ на 2021-2024 год",
    link: "http://xn--b1ae1achs.xn--p1ai/kollektivnyj-dogovor-gbpou-vodnpt-na-2021-2024-god-2/",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Изменения в правила внутреннего трудового распорядка ВОДНПТ ",
    link: "http://xn--b1ae1achs.xn--p1ai/izmeneniya-v-pravila-vnutrennego-trud-rasporyadka/",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "ОГРН",
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2018/04/OGRN-2015.pdf",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "ИНН",
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2018/04/INN-2012.jpg",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Указ о награждении орденом Дружбы народов",
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2018/04/Ukaz-orden.jpg",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Программа развития ВОДНПТ 2022-2027",
    link: "http://xn--b1ae1achs.xn--p1ai/programma-razvitiya_2022-2027/",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Отчет о результатах самообследования",
    link: "http://xn--b1ae1achs.xn--p1ai/otchet-o-rezultatah-samoobsledovaniya-gbpou-vodnpt-na-01-04-2024-g/",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Указ о награждении орденом Дружбы народов",
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2018/04/Ukaz-orden.jpg",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Программа развития ВОДНПТ 2022-2027",
    link: "http://xn--b1ae1achs.xn--p1ai/programma-razvitiya_2022-2027/",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Отчет о результатах самообследования",
    link: "http://xn--b1ae1achs.xn--p1ai/otchet-o-rezultatah-samoobsledovaniya-gbpou-vodnpt-na-01-04-2024-g/",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Отчет о результатах опроса обучающихся",
    link: "http://xn--b1ae1achs.xn--p1ai/otchet-o-rezultatah-oprosa-obuchayushhihsya-2/",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Отчет о результатах опроса преподавателей",
    link: "http://xn--b1ae1achs.xn--p1ai/otchet-o-rezultatah-oprosa-prepodavatelej-2/",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Отчет о результатах опроса работодателей",
    link: "http://xn--b1ae1achs.xn--p1ai/otchet-o-rezultatah-oprosa-rabotodatelej-2/",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "План воспитательной работы ГБПОУ ВОДНПТ на 2020-2021 учебный год",
    link: "http://xn--b1ae1achs.xn--p1ai/plan-vospitatelnoj-raboty-gbpou-vodnpt-2021-2022-uchebnyj-god-2/",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Программа развития воспитательной работы техникума на 2021-2024 учебный год ",
    link: "http://xn--b1ae1achs.xn--p1ai/programma-razvitiya-vospitatelnoj-raboty-tehnikuma-na-2021-2024-gody/",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Программа Нулевой травматизм ГБПОУ ВОДНПТ на 2010-2022 гг",
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/programma-nulevoj-travmatizm-gbpou-vodnpt-na-2020-2022-gg.pdf",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Комплексный план развития ",
    link: "http://xn--b1ae1achs.xn--p1ai/dlya-razmeshheniya-na-sajte_kompleksnyj-plan/",
    bgImage: "/img/news/card-bg.png",
  },
];
const docs2 = [
  {
    text: "Правила приема",
    link: "http://xn--b1ae1achs.xn--p1ai/pravila-priema-2024-2025_redakcziya_2-2/",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Правила внутреннего распорядка обучающихся ГБПОУ ВОДНПТ",
    link: "http://xn--b1ae1achs.xn--p1ai/pravila-vnutrennego-rasporyadka-obuchayushhihsya-gbpou-vodnpt-5-pdf-212x300/",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Режим и формы занятий обучающихся в ГБПОУ ВОДНПТ",
    link: "http://xn--b1ae1achs.xn--p1ai/polozhenie-o-rezhime-i-forme-zanyatij-obuchayushhihsya-v-gbpou-vodnpt-4/",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Положение о текущем контроле успеваемости",
    link: "http://xn--b1ae1achs.xn--p1ai/polozhenie-o-tekushhem-kontrole-uspevaemosti-i-promezhutochnoj-attestaczii-obuchayushhihsya-v-gbpou-vodnpt-4/",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Положение о порядке перевода, отчисления, восстановления",
    link: "http://xn--b1ae1achs.xn--p1ai/polozhenie-o-poryadke-i-osnovaniyah-perevoda-otchisleniya-i-vosstanovleniya-obuchayushhihsya-predostavleniya-akademicheskogo-otpuska-obuchayushhimsya-gbpou-vodnpt-2/",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Положение о порядке оформления, возникновения, прекращения отношений",
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2019/03/40.-Polozhenie-o-poryadke-oformleniyavozniknoveniya-prekrashheniya-otnoshenij.pdf",
    bgImage: "/img/news/card-bg.png",
  },
];

export default function DocumentsPage() {
  const { currentDirectionDocuments, status, error } = useSelector(
    (state) => state.documents
  );

  return (
    <div className="page">
      <SecondaryLayout>
        <DocumentsMenuComponent />
        <div className="flex flex-col gap-[70px] px-[20px] px-[20] lg:px-[77px]">
          <div className="documents-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentDirectionDocuments &&
            currentDirectionDocuments.length > 0 ? (
              currentDirectionDocuments.map((item) => (
                <a
                  href={`${process.env.NEXT_PUBLIC_SERVER_URL}${item.data}`}
                  target="_blank"
                  key={item.id}
                >
                  <CardComponent
                    footerText={item.name}
                    hasGradient={true}
                    borderRadius="30px"
                    docBtn={true}
                  />
                </a>
              ))
            ) : (
              <div>Выберите категорию документов</div>
            )}
          </div>
          <div>
            <TitleComponent>Приказ о зачислении</TitleComponent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[34px]">
              {docs1.map((doc, i) => (
                <a href={doc.link} key={i}>
                  <CardComponent
                    hasGradient="true"
                    className="max-w-auto max-h-[256px] lg:max-w-316px rounded-[25px]"
                    borderRadius="40px"
                    footerText={doc.text}
                    buttonText="Перейти"
                    docBtn="true"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="text-center">
            <TitleComponent>
              Локальные нормативные акты образовательной организации по основным
              вопросам организации и осуществления образовательной деятельности
            </TitleComponent>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[34px]">
            {docs2.map((doc, i) => (
              <a href={doc.link} key={i}>
                <CardComponent
                  hasGradient="true"
                  className="max-w-auto max-h-[256px] lg:max-w-316px rounded-[25px]"
                  borderRadius="40px"
                  footerText={doc.text}
                  buttonText="Перейти"
                />
              </a>
            ))}
          </div>
        </div>
      </SecondaryLayout>
    </div>
  );
}
