import SecondaryLayout from "@/components/layouts/SecondaryLayout";
import "../main.scss";
import TitleComponent from "@/components/UI/title/TitleComponent";
import CardComponent from "@/components/cards/CardComponent";
const docs = [
  {
    link: "http://xn--b1ae1achs.xn--p1ai/prikaz-o-sozdanii-studencheskogo-otryada/",
    text: "Приказ о создании студенческого отряда ",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/polozhenie-o-shtabe-studencheskih-otryadov-2/",
    text: "Положение о штабе студенческих отрядов ",
  },
];
const texts = [
  `В состав студенческого строительного отряда вошли 62 студента вторых и третьих курсов специальностей «Техническая эксплуатация и обслуживание электрического и электромеханического оборудования», «Защита в чрезвычайных ситуациях», «Монтаж и техническая​ эксплуатация промышленного оборудования», «Техническое обслуживание и ремонт автомобильного транспорта».`,
  `Как рассказала заместитель директора по производственной работе Виктория Теблоева, ребята отправляется в Красноярский край для выполнения сезонных ремонтных работ в ООО «Норильсникельремонт».`,
  `«На строительных работах студенты будут задействованы 4 месяца — с 1 июня по 30 сентября. Участие в данном проекте послужит дополнительной профессиональной ориентацией и социально-экономической адаптацией для обучающихся на современном рынке труда. Отмечу, что в состав стройотряда вошли ребята с хорошими оценками, активно занимающиеся общественной деятельностью и спортом. Кроме того, при выборе студентов учитывались и личностные факторы», — сообщила представитель техникума.
Отметим, всего в состав студенческого отряда вошли 500 студентов вузов и учреждений среднего профессионального образования республики. Это самый массовый студотряд за постсоветский период.`,
  `Напутствовал учащихся глава Северной Осетии Сергей Меняйло.`,
];
export default function StudentGroupsPage() {
  return (
    <div className="page">
      <SecondaryLayout>
        <div className="flex flex-col gap-7 px-5 md:px-10">
          <TitleComponent>Студенческие отряды ВГМТ</TitleComponent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {docs.map((item, i) => (
              <a key={i} href={item.link}>
                <CardComponent
                  hasGradient="true"
                  borderRadius="30px"
                  docBtn={true}
                  footerText={item.text}
                  className="max-w-[450px] w-full max-h-[290px] h-full"
                />
              </a>
            ))}
          </div>
          <div className="max-w-[900px]">
            <p className="font-montserrat font-bold text-4 md:text-5 ">
              Учащиеся Владикавказского политехнического техникума вошли в
              состав студенческого стройотряда
            </p>
            {texts.map((item, idx) => (
              <p
                key={idx}
                className="font-montserrat font-medium text-4 md:text-5 text-justify"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </SecondaryLayout>
    </div>
  );
}
