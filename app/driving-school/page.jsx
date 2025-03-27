import SecondaryLayout from "@/components/layouts/SecondaryLayout";
import "../main.scss";
import TitleComponent from "@/components/UI/title/TitleComponent";
import CardComponent from "@/components/cards/CardComponent";
const autoSchoolInfo = [
  "Краткое название: Автошкола «ВОДНПТ»",
  "Адрес: 362003, РСО – Алания, г. Владикавказ, пр. Коста, д. 195.",
  "График работы: Понедельник — пятница — с 09.00 до 17.00, в субботу — с 10.00 до 14.00, перерыв — 13.00 — 14.00, выходной воскресенье.",
  "Телефон: 8-8672-33-33-15 доб. 114",
  "E-mail: avtoshkola.gmt@mail.ru",
  "Время проведения занятий:",
  "первая группа с 16:00 до 17:30;",
  "вторая группа с 18:00 до 19:30.",
  "Стоимость обучения на категорию В — 12 000",
  "для студентов — 9 000 р.",
  "Для студентов — гибкая система скидок!",
  "Перечень документов: ксерокс паспорта, СНИЛС, медицинское заключение (оригинал и копия), фото (3*4) — 1 штука.",
];
const docs1 = [
  {
    text: "Сведения о преподавателях учебных предметов",
    link: "http://xn--b1ae1achs.xn--p1ai/prep-pr-ob/",
  },
  {
    text: "Сведения о мастерах производственного обучения",
    link: "http://xn--b1ae1achs.xn--p1ai/mastera-proizvodstvennogo-obucheniya-3/",
  },
];

const docs2 = [
  {
    text: "Положение о хозрасчетной автомобильной школе",
    link: "http://xn--b1ae1achs.xn--p1ai/polozhenie-o-hozraschetnoj-avtomobilnoj-shkole-pri-gbpou-vodnpt/",
  },
  {
    text: "Приказ о внесении изменения в Положение о хозрасчетной автомобильной школе при ГБПОУ ВОДНПТ",
    link: "http://xn--b1ae1achs.xn--p1ai/czeh-po-proizvodstvu-plastikovyh-okon/",
  },
  {
    text: "Правила внутреннего распорядка автошколы",
    link: "http://xn--b1ae1achs.xn--p1ai/czeh-po-proizvodstvu-plastikovyh-okon/",
  },
  {
    text: "Положение о порядке приема обучающихся",
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2019/03/Polozhenie-o-poryadke-priema-obuchayushhihsya.pdf",
  },
  {
    text: "Договор об оказании образовательных услуг",
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2019/03/DOGOVOR-OB-OKAZANII-OBR.USLUG.pdf",
  },
  {
    text: "Положение об экзаменационной комиссии по проведению промежуточной итоговой аттестации",
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2019/03/Polozhenie-ob-ekzamenatsionnoj-komissii-po-provedeniyu-promezhutochnoj-itogovoj-attestatsii.pdf",
  },
  {
    text: "Положение о проведении внутренних экзаменов",
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2019/03/Polozhenie-o-provedenii-vnutrennih-ekzamenov.pdf",
  },
  {
    text: "Методические рекомендации по организации образовательного процесса подготовки водителей транспортных средств различных категорий",
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2019/03/METODICHESKIE-REKOMENDATSII-PO-ORG.-OBR.-PROTSESSA.pdf",
  },
  {
    text: "Акт самообследования учебно-материальной базы категории «В» на соответствие установленным требованиям автошколы «ВОДНПТ» 2023 г.",
    link: "http://xn--b1ae1achs.xn--p1ai/akt-66666/",
  },
  {
    text: "Заключение ГИБДД",
    link: "http://xn--b1ae1achs.xn--p1ai/zaklyuchenie-gibdd-o-sootvetstvii-uchebno-materialnoj-bazy-trebovaniyam-ustanovlennym-primernymi-programmami-professionalnogo-obuche/",
  },
  {
    text: "Учебно — материальная база для образовательных программ подготовки водителей автотранспортных средств категории «В»",
    link: "http://xn--b1ae1achs.xn--p1ai/akt-55/",
  },
  {
    text: "Акт самообследования учебно-материальной базы категории «С» на соответствие установленным требованиям автошколы «ВОДНПТ» 2019 г.",
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/Akt-samoobsledovan.kat.s..pdf",
  },
  {
    text: "Заключение ГИБДД о соответствии учебно-материальной базы требованиям категорий и подкатегорий «В» автошколы»ВОДНПТ» 2019 г.",
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/Zaklyuchenie-GIBDD.pdf",
  },
  {
    text: "Заключение ГИБДД о соответствии учебно-материальной базы требованиям категорий и подкатегорий «С» автошколы «ВОДНПТ» 2019 г.",
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/zaklyuchenie-o-sootvetstvii-kat-s.pdf",
  },
  {
    text: "Образовательная программа профессиональной подготовки водителей транспортных средств категории «В»",
    link: "http://xn--b1ae1achs.xn--p1ai/v-rabochaya-pr/",
  },
  {
    text: "Образовательная программа переподготовки водителей транспортных средств с категории «Д» на категорию «В» ",
    link: "http://xn--b1ae1achs.xn--p1ai/d-na-v-rabochaya-pr/",
  },
  {
    text: "Образовательная программа переподготовки водителей транспортных средств с категории «С» на категорию «В»",
    link: "http://xn--b1ae1achs.xn--p1ai/s-na-v-raboch-pr/",
  },
];
const docs3 = [
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2019/07/Godovoj-kalendarnyj-grafik.pdf",
    text: "Годовой календарный график",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2019/07/Godovoj-kalendarnyj-grafik.pdf",
    text: "Календарный учебный график",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2019/07/Uchebnyj-plan-%C2%ABPodgotovki-voditelej-transportnyh-sredstv-kategorii-%C2%ABV%C2%BB%C2%BB.pdf",
    text: "Учебный план «Подготовки водителей транспортных средств категории «В»",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2019/07/OP-VOZHDENIE-TRANSPORTNYH-SREDSTV-KATEGORII-%C2%ABV%C2%BB-s-avtomaticheskoj-transmissiej.pdf",
    text: "ОП ВОЖДЕНИЕ ТРАНСПОРТНЫХ СРЕДСТВ КАТЕГОРИИ «В» ( с автоматической трансмиссией)",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2019/07/OP-VOZHDENIE-TRANSPORTNYH-SREDSTV-KATEGORII-%C2%ABV%C2%BB-s-avtomaticheskoj-transmissiej.pdf",
    text: "ОП ВОЖДЕНИЕ ТРАНСПОРТНЫХ СРЕДСТВ КАТЕГОРИИ «В» ( с механической трансмиссией)",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2019/07/OP-ORGANIZACZIYA-I-VYPOLNENIE-GRUZOVYH-PEREVOZOK-AVTOMOBILNYM-TRANSPORTOM.pdf",
    text: "ОП ОРГАНИЗАЦИЯ И ВЫПОЛНЕНИЕ ГРУЗОВЫХ ПЕРЕВОЗОК АВТОМОБИЛЬНЫМ ТРАНСПОРТОМ",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2019/07/OP-ORGANIZACZIYA-I-VYPOLNENIE-PASSAZHIRSKIH-PEREVOZOK-AVTOMOBILNYM-TRANSPORTOM.pdf",
    text: "ОП ОРГАНИЗАЦИЯ И ВЫПОЛНЕНИЕ ПАССАЖИРСКИХ ПЕРЕВОЗОК АВТОМОБИЛЬНЫМ",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2019/07/OP-OSNOVY-ZAKONODATELSTVA-V-SFERE-DOROZHNOGO-DVIZHENIYA.pdf",
    text: "ТРАНСПОРТОМ ОП ОСНОВЫ ЗАКОНОДАТЕЛЬСТВА В СФЕРЕ ДОРОЖНОГО ДВИЖЕНИЯ",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2019/07/OP-OSNOVY-UPRAVLENIYA-TRANSPORTNYMI-SREDSTVAMI-KATEGORII-%C2%ABV%C2%BB.pdf",
    text: "ОП ОСНОВЫ УПРАВЛЕНИЯ ТРАНСПОРТНЫМИ СРЕДСТВАМИ КАТЕГОРИИ «В»",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2019/07/OP-OSNOVY-UPRAVLENIYA-TRANSPORTNYMI-SREDSTVAMI.pdf",
    text: "ОП ОСНОВЫ УПРАВЛЕНИЯ ТРАНСПОРТНЫМИ СРЕДСТВАМИ ОП ПЕРВАЯ ПОМОЩЬ ПРИ ДОРОЖНО — ТРАНСПОРТНОМ ПРОИСШЕСТВИИ",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2019/07/OP-PSIHOFIZIOLOGICHESKIE-OSNOVY-DEYATELNOSTI-VODITELYA.pdf",
    text: "ОП ПСИХОФИЗИОЛОГИЧЕСКИЕ ОСНОВЫ ДЕЯТЕЛЬНОСТИ ВОДИТЕЛЯ",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2019/07/OP-USTROJSTVO-I-TEHNICHESKOE-OBSLUZHIVANIE-TRANSPORTNYH-SREDSTV-KATEGORII-%C2%ABV%C2%BB-KAK-OBEKTOV-UPRAVLENIYA.pdf",
    text: "ОП УСТРОЙСТВО И ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ ТРАНСПОРТНЫХ СРЕДСТВ КАТЕГОРИИ «В» КАК ОБЪЕКТОВ УПРАВЛЕНИЯ",
  },
];
const docs4 = [
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2019/07/Primernaya-programma-kategoriya-V-.pdf",
    text: "Примерная программа категория В",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2019/07/Primernaya-programma-kategoriya-V-.pdf",
    text: "Примерная программа категория В",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/2019/03/Standart-RF.pdf",
    text: "Стандарт РФ по профессии«Водитель транспортного средства категории «В»",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/primernaya-programma-professionalnoj-podgotovki-voditelej-transportnyh-sredstv-kategorii-s.pdf",
    text: "Примерная программа профессиональной подготовки водителей транспортных средств категории «С»",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/primernaya-programma-professionalnoj-podgotovki-voditelej-transportnyh-sredstv-kategorii-s.pdf",
    text: "Стандарт РФ по профессии Водитель ТС категории C",
  },
];
const docs5 = [
  {
    link: "http://xn--b1ae1achs.xn--p1ai/materialno/",
    text: "Материально-техническое обеспечение",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/materialno/",
    text: "Сведения о наличии в собственности или на ином законном основании оборудованных учебных транспортных средств",
  },
];
export default function DrivingSchoolPage() {
  return (
    <div className="page">
      <SecondaryLayout>
        <div className="flex flex-col gap-10 px-5 md:px-10">
          <div className="max-w-[700px] w-full flex flex-col gap-6">
            <TitleComponent>
              Автошкола при Государственном бюджетном профессиональном
              образовательном учреждении «ВГМТ».
            </TitleComponent>
            <div>
              {autoSchoolInfo.map((item, i) => (
                <p
                  key={i}
                  className="font-montserrat text-4 md:text-5 font-medium"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          <TitleComponent>
            Структура и органы управления автошколой
          </TitleComponent>
          <div>
            <p>РУКОВОДСТВО</p>
            <p>Ф.И.О. Дзагахова Раиса Александровна</p>
            <p>Должность : Начальник автошколы</p>
            <p>контактный тел: 33-33-15, добавочный 114</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
          <TitleComponent>Документы</TitleComponent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
          <TitleComponent>Образование</TitleComponent>
          <div>
            <p>Уровень образования: Профессиональная подготовка водителей ТС</p>
            <p>Нормативные сроки обучения</p>
            <p>Категория «B» — 2,5 месяца</p>
            <p>Категория «C» — 3 месяца</p>
            <p>Язык образования: Образование осуществляется на русском языке</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {docs3.map((item, i) => (
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
          <TitleComponent>Образовательные стандарты</TitleComponent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {docs4.map((item, i) => (
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
          <div className="flex flex-col gap-10">
            <TitleComponent>Материально-техническое обеспечение</TitleComponent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {docs5.map((item, i) => (
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
            <div className="flex flex-col gap-6">
              <p className="font-montserrat font-medium text-[16px] md:text-[20px]">
                Автодром ВОДНПТ — для выполнения упражнений на легковых учебных
                и грузовых учебных автомобилях. Зоны учебных упражнений
                автодрома имеют однородное асфальтовое покрытие. Размеры и
                оборудование автодрома обеспечивают возможность выполнения
                учебных упражнений в зависимости от категории и подкатегории
                транспортного средства, на право управления которым обучается
                обучающийся.Дорожные знаки и нанесенная разметка соответствует
                требованиям ГОСТов.
              </p>
              <p className="font-montserrat font-medium text-[16px] md:text-[20px]">
                Автодром расположен по адресу: г. Владикавказ, ул.Ватутина,118
              </p>
            </div>
          </div>
        </div>
      </SecondaryLayout>
    </div>
  );
}
