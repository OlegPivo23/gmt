import TitleComponent from "../UI/title/TitleComponent";

export default function RulesComponent() {
  const rules = [
    "Приём заявлений в техникум осуществляется с 20 июня:",
    "— на очную форму обучения — до 15 августа",
    "— на заочную форму обучения — до 25 ноября",
    "— на очную форму обучения по специальности «Защита в чрезвычайных ситуациях» — до 10 августа",
    "— на очную форму обучения по договорам об оказании платных образовательных услуг — до 30 августа",
    "Выходные дни приемной комиссии — суббота, воскресенье",
  ];

  return (
    <div>
      <div className="flex flex-col gap-[37px] mx-[83px]">
        <TitleComponent>Правила подачи заявления:</TitleComponent>

        <ul>
          {rules.map((rule, index) => (
            <li
              key={index}
              className={`font-bold text-[20px] text-black ${
                index === rules.length - 1 ? "mt-[20px]" : ""
              }`}
            >
              {rule}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
