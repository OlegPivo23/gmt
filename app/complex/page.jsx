import SecondaryLayout from "@/components/layouts/SecondaryLayout";
import "../main.scss";
import TitleComponent from "@/components/UI/title/TitleComponent";
import CardComponent from "@/components/cards/CardComponent";
const docs = [
  {
    link: "http://xn--b1ae1achs.xn--p1ai/prikaz-o-sozdanii-uchebno-prorizvodstvennogo-kompleksa-2/",
    text: "Приказ о создании учебно-производственного комплекса",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/polozhenie-ob-uchebno-proizvodstvennom-komplekse-gbpou-vodnpt-4/",
    text: "Положение об учебно-производственном комплексе ГБПОУ ВОДНПТ",
  },
  {
    link: "https://disk.yandex.ru/d/VTdm4D6OuS0GmQ",
    text: "Деятельность",
  },
];
export default function ComplexPage() {
  return (
    <div className="page">
      <SecondaryLayout>
        <div className="flex flex-col gap-5 px-4 md:px-10">
          <TitleComponent>
            Учебно-производственный комплекс (УПК) 
          </TitleComponent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {docs.map((item, idx) => (
              <a href={item.link} key={idx}>
                <CardComponent
                  hasGradient={true}
                  borderRadius="30px"
                  footerText={item.text}
                  docBtn="true"
                  className="max-w-[450px] w-full max-h-[290px] h-full"
                />
              </a>
            ))}
          </div>
        </div>
      </SecondaryLayout>
    </div>
  );
}
