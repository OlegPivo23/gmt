import CardComponent from "@/components/cards/CardComponent";
import MainLayout from "@/components/layouts/MainLayout";
import TitleComponent from "@/components/UI/title/TitleComponent";
import "../main.scss";

const docs1 = [
  {
    text: "Правила приема",
    link: "",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Правила приема",
    link: "",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Правила приема",
    link: "",
    bgImage: "/img/news/card-bg.png",
  },
];
const docs2 = [
  {
    text: "Правила приема",
    link: "",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Правила приема",
    link: "",
    bgImage: "/img/news/card-bg.png",
  },
  {
    text: "Правила приема",
    link: "",
    bgImage: "/img/news/card-bg.png",
  },
];

export default function DocumentsPage() {
  return (
    <div className="page">
      <MainLayout>
        <div className="flex flex-col gap-[70px] px-[20px] px-[77px]">
          <div>
            <ul>
              <li>
                <a
                  href=""
                  className="font-bold text-[48px] underline decoration-black decoration-0 text-black"
                >
                  Федеральный закон от 29.12.2012 N 273-ФЗ (ред. от 02.07.2021
                  года) «Об образовании в Российской Федерации»
                </a>
              </li>
            </ul>
          </div>
          <div>
            <TitleComponent>Приказ о зачислении</TitleComponent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[34px]">
              {docs1.map((doc, i) => (
                <CardComponent
                  key={i}
                  maxWidth="458px"
                  maxHeight="322px"
                  width="100%"
                  height="100%"
                  bgImage={doc.bgImage}
                  footerText={doc.text}
                />
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
              <CardComponent
                key={i}
                maxWidth="458px"
                maxHeight="322px"
                width="100%"
                height="100%"
                bgImage={doc.bgImage}
                footerText={doc.text}
              />
            ))}
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
