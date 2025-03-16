import { useNavigation } from "@/hooks/useNavigation";

export default function ProfessionalismBtnComponent() {
  const navigateTo = useNavigation();

  return (
    <div
      className="cursor-pointer"
      onClick={() => navigateTo("/professionalism")}
    >
      <img src="/img/professionalism/specialitet.png" alt="Профессионалитет" />
    </div>
  );
}
