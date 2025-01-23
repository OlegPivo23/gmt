import ContactsComponent from "../contacts/ContactsComponent";
import HeaderComponent from "../header/HeaderComponent";
import LinksComponent from "../links/LinksComponent";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col gap-[90px] bg-white">
      <header>
        <HeaderComponent />
      </header>
      {children}
      <footer className="rounded-b-[40px] rounded-t-[40px] px-[87px] py-[40px] flex flex-col gap-[90px] bg-[#fafafa]">
        <ContactsComponent />
        <LinksComponent />
      </footer>
    </div>
  );
}
