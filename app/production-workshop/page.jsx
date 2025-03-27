import SecondaryLayout from "@/components/layouts/SecondaryLayout";
import "../main.scss";
import TitleComponent from "@/components/UI/title/TitleComponent";
import CardComponent from "@/components/cards/CardComponent";
const texts = [
  `Первый в Северной Осетии производственный цех открылся при Владикавказском политехническом техникуме.
Реализация проекта позволит техникуму не только сэкономить на ремонтных работах, но и станет дополнительным источником внебюджетного финансирования. Продукцию, которую изготавливают студенты, планируется предоставлять бюджетным и частным организациям. Заработанные средства будут направлены на улучшение материально-технической базы техникума.`,
  `Во внеурочное время в цехе под чутким руководством опытных наставников трудятся и дополнительно обучаются учащиеся техникума, прошедшие конкурсный отбор. Штат сотрудников будет расширятся по мере увеличения производственных мощностей.
`,
  `Создание цеха, закуп оборудования были осуществлены на внебюджетные средства техникума.`,
];
export default function ProductionWorkshopPage() {
  return (
    <div className="page">
      <SecondaryLayout>
        <div className="flex flex-col gap-[56px] md:gap-6  px-[20px] md:px-[40px]">
          <div className="max-w-[900px] w-full flex flex-col gap-5">
            <TitleComponent>
              Цех по производству пластиковых окон
            </TitleComponent>
            <div className="flex flex-col gap-4">
              {texts.map((item, idx) => (
                <p
                  className="font-semibold font-medium text-4 md:text-[20px] text-justify"
                  key={idx}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <a
              target="_blank"
              href="http://xn--b1ae1achs.xn--p1ai/polozhenie-o-proizvodstvennom-czehe-po-izgotovleniyu-izdelij-iz-pvh-2/"
            >
              <CardComponent
                hasGradient={true}
                borderRadius="30px"
                docBtn="true"
                footerText="Положение о производственном цехе по изготовлению изделий из ПВХ"
                className="max-w-[450px] w-full max-h-[291px] h-full"
              />
            </a>
          </div>
        </div>
      </SecondaryLayout>
    </div>
  );
}
