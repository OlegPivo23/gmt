"use client";
import SecondaryLayout from "@/components/layouts/SecondaryLayout";
import "../main.scss";
import TitleComponent from "@/components/UI/title/TitleComponent";
import CardComponent from "@/components/cards/CardComponent";
import { useRouter } from "next/navigation";

const docs = [
  {
    link: "http://xn--b1ae1achs.xn--p1ai/avtoshkola/",
    text: "Автошкола ВОДНП",
    isExternal: true,
  },
  {
    link: "/production-workshop",
    text: "Производственная мастерская",
    isExternal: false,
  },
  {
    link: "/employment-promotion",
    text: "Центр содействия трудоустройству выпускников",
    isExternal: false,
  },
  {
    link: "/training-center",
    text: "Центр практической подготовки 'Диагност авто'",
    isExternal: false,
  },

  {
    link: "http://xn--b1ae1achs.xn--p1ai/polozhenie-ob-uchebno-proizvodstvennoj-avtomasterskoj-gbpou-vodnpt/",
    text: "Учебно-производственная мастерская ГБПОУ ВОДНПТ",
    isExternal: true,
  },
  {
    link: "/student-groups",
    text: "Студенческие отряды",
    isExternal: false,
  },
  {
    link: "/complex",
    text: "Учебно-производственный комплекс",
    isExternal: false,
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/polozhenie-_upcz-sadon/",
    text: "Положение _УПЦ Садон",
    isExternal: true,
  },
];

export default function StructureAndOrgansPage() {
  const router = useRouter();

  const handleLinkClick = (item) => {
    console.log("clicked");
    if (item.isExternal) {
      window.open(item.link, "_blank", "noopener,noreferrer");
    } else {
      router.push(item.link);
    }
  };

  return (
    <div className="page">
      <SecondaryLayout>
        <div className="px-[20px] md:px-[40px] flex flex-col gap-6">
          <img
            src="/img/structure-and-organs/structure.png"
            alt="structure and organs image"
            className="mx-auto aspect-auto px-4"
          />
          <TitleComponent>Структурные подразделения</TitleComponent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {docs.map((item, index) => (
              <div key={index} onClick={() => handleLinkClick(item)}>
                <CardComponent
                  hasGradient={true}
                  borderRadius="30px"
                  footerText={item.text}
                  className="max-w-[451px] w-full max-h-[251px] h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </SecondaryLayout>
    </div>
  );
}
