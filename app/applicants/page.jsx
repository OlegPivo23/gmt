import SecondaryLayout from "@/components/layouts/SecondaryLayout";
import "../main.scss";
import { OrderComponent } from "@/components/order/OrderComponent";
import ImportantComponent from "@/components/important/ImportantComponent";
import RulesComponent from "@/components/rules/RulesComponent";
import DocumentsListComponent from "@/components/documentsList/DocumentsListComponent";
import DocumentForm from "@/components/documentForm/DocumentForm";
export default function ApplicantsPage() {
  return (
    <div className="page">
      <SecondaryLayout>
        <section>
          <OrderComponent />
        </section>
        <section>
          <ImportantComponent />
        </section>
        <section>
          <RulesComponent />
        </section>
        <section>
          <DocumentsListComponent />
        </section>
        <section>
          <DocumentForm />
        </section>
      </SecondaryLayout>
    </div>
  );
}
