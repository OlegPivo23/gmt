import SecondaryLayout from "@/components/layouts/SecondaryLayout";
import "../main.scss";
import CardComponent from "@/components/cards/CardComponent";
const docs = [
  {
    link: "http://xn--b1ae1achs.xn--p1ai/prikaz-o-sozdanii-czentra-sodejstviya-trudoustrojstvu-vypusknikov/",
    text: "Приказ о создании Центра содействия трудоустройству выпускников",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/polozhenie-o-czentre-sodejstviya-trudoustrojstvu-vypusknikov/",
    text: "Положение о Центре содействия трудоустройству выпускников",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/prikaz-ot-01-09-2022-plan-raboty/",
    text: "План работы Центра содействия трудоустройству выпускников",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/sostav-czentra-sodejstviya-trudoustrojstvu-vypusknikov/",
    text: "Состав Центра содействия трудоустройству выпускников",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/soglashenie-czentr-zanyatosti/",
    text: "Соглашение с центром занятости",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/pamyatka-poisk-raboty/",
    text: "Памятка для поиска работы",
  },
];
export default function EmploymentPromotionPage() {
  return (
    <div className="page">
      <SecondaryLayout>
        <div className="flex flex-col gap-6 px-5 md:px-10">
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
          <p className="text-[16px] md:text-[20px] font-montserrat font-medium">
            Горячая линия для выпускников: (8762) 33-33-15 (112)
          </p>
        </div>
      </SecondaryLayout>
    </div>
  );
}
