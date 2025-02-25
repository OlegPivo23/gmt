import TitleComponent from "../UI/title/TitleComponent";
import Image from "next/image";

export default function DocumentForm() {
  return (
    <section className=" px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl flex flex-col gap-6 md:gap-8 lg:gap-10">
        <div className="text-center">
          <TitleComponent className="text-center text-2xl sm:text-3xl lg:text-4xl">
            Заочная форма обучения (11 класс)
          </TitleComponent>
        </div>

        <div className="relative w-full overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <Image
            src="/img/documentForm/form-example.png"
            alt="Пример формы документа для заочной формы обучения"
            width={1256}
            height={1154}
            className="object-contain w-full h-auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
            quality={90}
            priority
          />

          <div
            className="md:hidden absolute inset-0 touch-pan-x touch-pan-y"
            aria-hidden="true"
            style={{ pointerEvents: "none" }}
          />
        </div>
      </div>
    </section>
  );
}
