import SecondaryLayout from "@/components/layouts/SecondaryLayout";
import "../main.scss";
import CardComponent from "@/components/cards/CardComponent";
import TitleComponent from "@/components/UI/title/TitleComponent";
const docs = [
  {
    text: "Приказ о создании",
    link: "http://xn--b1ae1achs.xn--p1ai/prikaz-o-sozdanii/",
  },
  {
    text: "Положение о центре практической подготовки",
    link: "http://xn--b1ae1achs.xn--p1ai/polozhenie-o-czentre-prakticheskoj-podgotovki-diagnost-avto-2/",
  },
];
export default function TrainingCenterPage() {
  return (
    <div className="page">
      <SecondaryLayout>
        <div className="flex flex-col gap-6 px-5 md:px-10">
          <TitleComponent>
            Центр практической подготовки «Диагност Авто»
          </TitleComponent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {docs.map((item, idx) => (
              <a href={item.link} key={idx}>
                <CardComponent
                  hasGradient={true}
                  borderRadius="30px"
                  className="max-w-[450px] w-full max-h-[290px] h-full"
                  docBtn="true"
                  footerText={item.text}
                />
              </a>
            ))}
          </div>
        </div>
      </SecondaryLayout>
    </div>
  );
}
