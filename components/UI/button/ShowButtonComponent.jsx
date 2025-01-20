export default function ShowButton({ children }) {
  return (
    <button className="font-custom font-extrabold text-sm text-center text-[#1f1f1f] underline decoration-transparent focus:outline-none focus:ring-0">
      {children}
    </button>
  );
}
