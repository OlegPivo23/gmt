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
    <section className="">
      <div className=" px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="pl-[83px] flex flex-col gap-6 md:gap-8 lg:gap-10">
          <TitleComponent className="text-2xl sm:text-3xl lg:text-4xl">
            Правила подачи заявления:
          </TitleComponent>
          <ul className="list-none">
            {" "}
            {/* Убраны лишние отступы */}
            {rules.map((rule, index) => (
              <li
                key={index}
                className={`
                  font-montserrat font-extrabold
                  text-base 
                  sm:text-lg lg:text-xl 
                  text-gray-800 
                  ${index === 0 ? "font-bold text-black" : ""}
                  ${index === rules.length - 1 ? "mt-6 md:mt-8" : ""}
                `}
              >
                {rule.startsWith("—") ? <span>{rule}</span> : rule}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
