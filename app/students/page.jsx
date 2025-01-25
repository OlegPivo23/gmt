import SecondaryLayout from "@/components/layouts/SecondaryLayout";
import ScheduleComponent from "@/components/schedule/ScheduleComponent";

export default function StudentsPage() {
  return (
    <div className="page">
      <SecondaryLayout>
        <ScheduleComponent />
      </SecondaryLayout>
    </div>
  );
}
