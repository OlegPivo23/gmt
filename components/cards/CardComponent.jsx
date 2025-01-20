export default function CardComponent({
  title,
  description,
  bgImage,
  buttonText,
  children,
  maxWidth = "100%",
  maxHeight = "auto",
  width = "100%",
  height = "auto",
}) {
  return (
    <div
      className="rounded-[25px] box-border object-cover aspect-[1/1] cursor-pointer relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        maxWidth: maxWidth,
        maxHeight: maxHeight,
        width: width,
        height: height,
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

      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}
