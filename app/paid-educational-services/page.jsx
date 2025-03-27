import TitleComponent from "@/components/UI/title/TitleComponent";
import "../main.scss";
import CardComponent from "@/components/cards/CardComponent";
import SecondaryLayout from "@/components/layouts/SecondaryLayout";
const docs1 = [
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2019/04/89.-Polozhenie-ob-okazanii-platnyh-uslug.pdf",
    text: "Положение об оказании платных услуг",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/O-vnesenii-izmeneniya-v-Polozhenie-001_straniczy.pdf",
    text: "Изменения в Положении об оказании платных образовательных услуг",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2018/09/pismo-MON-MTSPK.pdf",
    text: "Письмо МОН МЦПК",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2018/09/pismo-MON-MTSPK.pdf",
    text: "План мероприятий",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2018/09/Polozhenie-IGA-MTSPK.pdf",
    text: "Положение ИГА МЦПК",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2018/09/Polozhenie-MTSPK.pdf",
    text: "Положение МЦПК",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2018/09/Polozhenie-MTSPK.pdf",
    text: "Положение об оказании платных образовательных услуг",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2018/09/Pravila-priema-v-MTSPK.pdf",
    text: "Правила приема в МЦПК",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2018/09/prikaz-o-sozdanii-MTSPK.pdf",
    text: "Приказ о создании МЦПК",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2019/02/Plan-FHD-2019.pdf",
    text: "Объем образовательной деятельности, финансовое обеспечение",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/obrazecz-dogovora-2021-1/",
    text: "Образец договора 2021",
  },
];
const docs2 = [
  {
    link: "http://xn--b1ae1achs.xn--p1ai/scan_20210224_100018049/",
    text: "43.02.10 Туризмм (ТМ)",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/scan_20210224_100124194/",
    text: "43.02.10 Туризмм (ТМз)",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/scan_20210224_100215509/",
    text: "38.02.01 Экономика и бухгалтерский учет (по отраслям)",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/scan_20210224_100257777/",
    text: "38.02.01 Экономика и бухгалтерский учет (по отраслям) (БАз)",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/scan_20210224_100358121/",
    text: "13.02.11 Техническая эксплуатация и обслуживание электрического и электромеханического оборудования (по отраслям) (ЭО)",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/scan_20210224_100503487/",
    text: "13.02.11 Техническая эксплуатация и обслуживание электрического и электромеханического оборудования (по отраслям) (ЭОз)",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/scan_20210224_100548777/",
    text: "21.02.05. Земельно-имущественные отношения (заочное отделение)",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/scan_20210224_100634069/",
    text: "21.02.05. Земельно-имущественные отношения",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/scan_20210224_100850709/",
    text: "15.02.12. Монтаж, техническое обслуживание и ремонт промышленного оборудования (по отраслям) (заочное отделение)",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/scan_20210224_100951075/",
    text: "15.02.12. Монтаж, техническое обслуживание и ремонт промышленного оборудования (по отраслям)​",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/scan_20210224_101036336/",
    text: "40.02.01. Право и организация социального обеспечения",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/scan_20210224_101233985/",
    text: "40.02.01. Право и организация социального обеспечения",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/scan_20210224_101325279/",
    text: "15.02.10. Мехатроника и мобильная робототехника (по отраслям) (заочное отделение)",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/scan_20210224_101501744/",
    text: "15.02.10. Мехатроника и мобильная робототехника (по отраслям)",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/scan_20210224_101602066/",
    text: "43.02.08 Сервис домашнего и коммунального хозяйства (ЖКХ)",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/scan_20210224_101708395/",
    text: "43.02.08 Сервис домашнего и коммунального хозяйства (ЖКХз)",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/scan_20210224_101747702/",
    text: "23.02.07. Техническое обслуживание и ремонт двигателей, систем и агрегатов автомобилей",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/scan_20210224_101747702/",
    text: "23.02.07. Техническое обслуживание и ремонт двигателей, систем и агрегатов автомобилей (заочное отделение)",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/scan_20210224_102018684/",
    text: "20.02.02 Защита в чрезвычайных ситуациях",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/scan_20210224_101842022/",
    text: "Расчет стоимости обучения по дополнительной профессиональной подготовке водителей транспортных средств категории «В» на 2021-2022 учебный год",
  },
];
export default function PaidEducationalServicesPage() {
  return (
    <div className="page">
      <SecondaryLayout>
        <div className="flex flex-col gap-8 md:gap-10 px-5 md:px-10">
          {/* Первый блок */}
          <div className="flex flex-col gap-8">
            <TitleComponent>Платные образовательные услуги</TitleComponent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {docs1.map((item, i) => (
                <a href={item.link} key={i}>
                  <CardComponent
                    hasGradient={true}
                    borderRadius="30px"
                    docBtn={true}
                    footerText={item.text}
                    className="max-h-[190px] h-full"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Второй блок */}
          <div className="flex flex-col gap-8">
            <div className="max-w-[700px] w-full">
              <TitleComponent className="mb-6">
                Расчет стоимости обучения одного студента на 2021-2022 учебный
                год:
              </TitleComponent>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {docs2.map((item, i) => (
                <a href={item.link} key={i}>
                  <CardComponent
                    hasGradient={true}
                    borderRadius="30px"
                    docBtn={true}
                    footerText={item.text}
                    className="max-h-[190px] h-full"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </SecondaryLayout>
    </div>
  );
}
