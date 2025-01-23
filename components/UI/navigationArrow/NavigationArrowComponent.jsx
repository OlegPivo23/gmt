import Image from "next/image";

export default function NavigationArrowComponent({
  direction,
  onClick,
  className,
}) {
  const isLeft = direction === "left";
  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 ${
        isLeft ? "left-[25px]" : "right-[25px]"
      } cursor-pointer ${className || ""}`}
      onClick={onClick}
    >
      <Image
        src="/icons/card/card-arrow-black.svg"
        alt={isLeft ? "Левая стрелка" : "Правая стрелка"}
        width={12}
        height={24}
        className={!isLeft ? "rotate-180" : ""}
      />
    </div>
  );
}
