import TitleComponent from "../UI/title/TitleComponent";

const contacts = [
  {
    title: "Главный корпус",
    text1: "362003, РСО — Алания, Владикавказ пр.Коста, 195",
    span: "Телефон/факс:",
    text2: "(8672) 33-33-15",
  },
  {
    title: 'ГБПОУ ПУ №3',
    text1: "362027, РСО-Алания Владикавказ, Ватутина, 118",
    span: "Телефон:",
    text2: "(8672) 33-30-15",
  },
  {
    title: "Приемная комиссия",
    text1: "362003, РСО — Алания, Владикавказ пр.Коста, 195",
    span: "Email:",
    text2: " vgmt@mon.alania.gov.ru",
  },
];

export default function ContactsComponent() {
  return (
    <div className="flex flex-col gap-[55px]">
      <div className="pt-[40px]">
        <TitleComponent>Контакты</TitleComponent>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between items-center">
        {contacts.map((contact, index) => (
          <div key={index} className="flex flex-col gap-[20px]">
            {contact.title && (
              <p className="font-medium text-[20px] text-[#ff9500]">
                {contact.title}
              </p>
            )}
            <div className="flex flex-col gap-[40px] max-w-[401px]">
              <p className="font-medium text-[20px] text-black">
                {contact.text1}
              </p>
              <p className="font-medium text-[20px] text-black">
                <span className="font-bold">{contact.span}</span>{" "}
                {contact.text2}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
