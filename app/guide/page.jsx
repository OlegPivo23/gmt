import GuideComponent from "@/components/guide/GuideComponent";
import SecondaryLayout from "@/components/layouts/SecondaryLayout";
import '../main.scss'

export default function GuidePage() {
  return (
    <div className="page">
      <SecondaryLayout>
        <GuideComponent />
      </SecondaryLayout>
    </div>
  );
}
