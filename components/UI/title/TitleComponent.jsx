export default function TitleComponent({ children, color = "#1f1f1f" }) {
  return (
    <h2
      className="font-montserrat font-extrabold text-[30px] md:text-[40px]"
      style={{ color }} 
    >
      {children}
    </h2>
  );
}
