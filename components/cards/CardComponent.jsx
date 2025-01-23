export default function CardComponent({
  title,
  description,
  bgImage,
  buttonText,
  maxWidth = "100%",
  maxHeight = "auto",
  width = "100%",
  height = "auto",
  borderRadius = "25px", 
}) {
  return (
    <div
      className="box-border object-cover aspect-[1/1] cursor-pointer relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        maxWidth: maxWidth,
        maxHeight: maxHeight,
        width: width,
        height: height,
        borderRadius: borderRadius, // Использование нового пропса
      }}
    >
      <div className="absolute bottom-8 left-0 p-4">
        {title && (
          <h2 className="font-extrabold text-[32px] text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]">
            {title}
          </h2>
        )}

        {description && (
          <p className="font-semibold text-[20px] text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]">
            {description}
          </p>
        )}
      </div>

      <div>
        {buttonText && (
          <div className="flex gap-2 items-center absolute bottom-[30px] right-[73px]">
            <button className="font-extrabold text-sm text-center text-white">
              {buttonText}
            </button>
            <img src="/icons/card/card-arrow.svg" alt="Стрелка" />
          </div>
        )}
      </div>
    </div>
  );
}
