export default function CardComponent({
  title,
  description,
  bgImage,
  buttonText,
  maxWidth = "100%",
  maxHeight = "auto",
  width = "100%",
  height = "auto",
  borderRadius = "0",
  footerText,
  className = "",
  hasGradient = false,
}) {
  return (
    <div
      className={`box-border object-cover aspect-[1/1] cursor-pointer relative ${className}`} 
      style={{
        backgroundImage: hasGradient
          ? `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 173, 91, 0.67) 100%), url(${bgImage})`
          : `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        maxWidth: maxWidth,
        maxHeight: maxHeight,
        width: width,
        height: height,
        borderRadius: borderRadius,
      }}
    >
      {/* Контент карточки */}
      <div className="absolute bottom-4 md:bottom-8 left-0 p-4">
        {title && (
          <h2 className="font-extrabold text-[20px]  text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]">
            {title}
          </h2>
        )}

        {description && (
          <p className="font-semibold text-[14px]  text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]">
            {description}
          </p>
        )}
      </div>

      {/* Кнопка (если есть) */}
      {buttonText && (
        <div className="flex gap-2 items-center absolute bottom-[15px] md:bottom-[30px] right-[20px] md:right-[73px]">
          <button className="font-extrabold text-xs md:text-sm text-center text-white">
            {buttonText}
          </button>
          <img
            src="/icons/card/card-arrow.svg"
            alt="Стрелка"
            className="w-4 h-4 md:w-6 md:h-6"
          />
        </div>
      )}

      {/* Футер (если есть) */}
      {footerText && (
        <div className="absolute bottom-0 left-0 w-full bg-white p-4 bg-white shadow-[0_-4px_13px_-5px_rgba(0,0,0,0.25)] ">
          <h2 className="font-bold text-[20px] underline decoration-transparent">
            {footerText}
          </h2>
        </div>
      )}
    </div>
  );
}
