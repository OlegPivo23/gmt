import ContactsComponent from "../contacts/ContactsComponent";
import HeaderSecondary from "../header/HeaderSecondary";
import LinksComponent from "../links/LinksComponent";

export default function SecondaryLayout({ children }) {
  return (
    <div className="flex flex-col gap-[90px] bg-white">
      <header>
        <HeaderSecondary />
      </header>
      {children}
      <footer className="rounded-b-[40px] rounded-t-[40px]  px-[40px] py-[20px] lg:px-[87px] lg:py-[40px] flex flex-col gap-[90px] bg-[#fafafa]">
        <ContactsComponent />
        <LinksComponent />
      </footer>
    </div>
  );
}
