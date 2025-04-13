"use client";
import SecondaryLayout from "@/components/layouts/SecondaryLayout";
import "../main.scss";
import { OrderComponent } from "@/components/order/OrderComponent";
import ImportantComponent from "@/components/important/ImportantComponent";
import RulesComponent from "@/components/rules/RulesComponent";
import DocumentsListComponent from "@/components/documentsList/DocumentsListComponent";
import DocumentForm from "@/components/documentForm/DocumentForm";
import ProfessionalismBtnComponent from "@/components/professionalismGroup/ProfessionalismBtnComponent";
import CardComponent from "@/components/cards/CardComponent";

const docs = [
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/perechen-speczialnostej.pdf",
    title: "Перечень специальностей",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/usloviya-priema-2025-2026-1.pdf",
    title:
      "Условия приема на обучение по договорам об оказании платных образовательных услуг по образовательным программам СПО на 2025-2026 учебный год",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/pravila-priema-2025-2026-1.pdf",
    title: "Правила приема",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/informacziya-o-nalichii-obshhezhitiya-1.pdf",
    title:
      "Информация о наличии общежития и количестве мест в общежитии, выделяемых для иногородних поступающих",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/trebovaniya-k-urovnyu-obrazovaniya-2024-2025-1.pdf",
    title: "Требования к уровню образования",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/osobennosti-provedeniya-vstupitelnyh-ispytanij-dlya-invalidov-1.pdf",
    title:
      "Особенности проведения вступительных испытаний для инвалидов и лиц с ограниченными возможностями здоровья",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/informacziya-o-perechne-vstupitelnyh-ispytanij-2025-2026-uch.-god.pdf",
    title:
      "Информация о перечне вступительных испытаний на 2025-2026 учебный год",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/informacziya-o-neobhodimosti-medosmotrov-1.pdf",
    title: "Информация о необходимости медосмотров",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/informacziya-o-vozmozhnosti-priema-zayavlenij-i-neobhodimyh-dokumentov-v-elektronnoj-forme-5.pdf",
    title:
      "Информация о возможности приема заявлений и необходимых документов в электронной форме",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/zayavlenie-o-prieme-na-obuchenie-2/",
    title: "Заявление о приеме на обучение",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/obrazecz-dogovora-2024-2025/",
    title: "Образец договора на обучение",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/pravila-podachi-i-rassmotreniya-apellyaczij-po-rezultatam-vstupitelnyh-ispytanij.pdf/",
    title: "Правила подачи апелляции",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/programma-vstupit-ispytanij_chs-1.pdf",
    title:
      "Программа вступительных испытаний по дисциплине Физическая культура для поступающих на специальность 20.02.02 Защита в чрезвычайных ситуациях",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/soglasie-na-obrabotku-personalnyh-dannyh-nesovershennoletnego-2/",
    title: "Согласие на обработку персональных данных несовершеннолетнего",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/soglasie-na-obrabotku-personalnyh-dannyh-sovershennoletnego-1-2/",
    title: "Согласие на обработку персональных данных совершеннолетнего",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/kolichestvo-mest-po-dogovoram-ob-okazanii-platnyh-obrazovatelnyh-uslug-na-2025-2026-uchebnyj-god-2/",
    title:
      "Количество мест по договорам об оказании платных образовательных услуг на 2025-2026 учебный год",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/kolichestvo-mest-po-dogovoram-ob-okazanii-platnyh-obrazovatelnyh-uslug-na-2025-2026-uchebnyj-god-1.pdf",
    title:
      "Количество мест по договорам об оказании платных образовательных услуг на 2025-2026 учебный год",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/kolichestvo-mest-finansiruemyh-za-schet-byudzheta-na-2025-2026-uch.-god.pdf",
    title: "Количество мест финансируемых за счет бюджета",
  },
  {
    link: "http://xn--b1ae1achs.xn--p1ai/wp-content/uploads/obshhee-kolichestvo-mest-dlya-priema-2025.pdf",
    title:
      "Общее количество мест для приема по каждой специальности на 2025 учебный год",
  },
];
export default function ApplicantsPage() {
  return (
    <div className="page gap-[30px] ">
      <SecondaryLayout>
        <section>
          <RulesComponent />
        </section>
        <section>
          <DocumentsListComponent />
        </section>
        <section>
          <ImportantComponent />
        </section>
        <section>
          <OrderComponent />
        </section>
        {/* <section>
          <DocumentForm />
        </section> */}
        <div className="mx-auto px-5 lg:px-[83px] flex flex-col gap-4">
          <p className="font-bold text-[20px] underline decoration-transparent">
            Поступающие вправе направить заявление о приеме, а также необходимые
            документы одним из следующих способов:
          </p>
          <ul className="list-disc pl-5">
            <li>
              <p className="font-bold text-[20px] underline decoration-transparent">
                лично в образовательную организацию через операторов почтовой
                связи общего пользования заказным письмом с уведомлением о
                вручении.
              </p>
            </li>
          </ul>
          <p className="font-bold text-[20px] underline decoration-transparent">
            Документы направляются/предоставляются в приёмную комиссию по
            адресу:
          </p>
          <p className="font-bold text-[20px] underline decoration-transparent">
            362003 РСО-Алания, г. Владикавказ, ул. пр. Коста,195:
          </p>
          <ul className="list-disc pl-5">
            <li>
              <p className="font-bold text-[20px] underline decoration-transparent">
                в электронной форме посредством электронной почты
                (vodnpt@mail.ru) в соответствии с Федеральным законом от 6
                апреля 2011 г. № 63-ФЗ «Об электронной подписи», Федеральным
                законом от 27 июля 2006 г. № 149-ФЗ «Об информации,
                информационных технологиях и о защите информации», Федеральным
                законом от 7 июля 2003 г. № 126-ФЗ «О связи»;
              </p>
            </li>
          </ul>
        </div>

        <section className="px-5">
          <ProfessionalismBtnComponent />
        </section>
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-7 ">
            {docs.map((item, idx) => (
              <a href={item.link} key={idx}>
                <CardComponent
                  docBtn={true}
                  hasGradient={true}
                  footerText={item.title}
                  borderRadius="30px"
                  className="max-w-[320px] max-h-[260px]"
                />
              </a>
            ))}
          </div>
        </section>
      </SecondaryLayout>
    </div>
  );
}
