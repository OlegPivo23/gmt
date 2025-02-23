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
      <footer className="rounded-b-[40px] rounded-t-[40px]  flex flex-col gap-[90px] bg-[#fafafa] ">
        <div className="px-4 md:px-[30px] lg:px-[90px]">
          <ContactsComponent />
        </div>
        <div className="px-4 md:px-[30px] lg:px-[90px] bg-[#ffad5b]">
          <LinksComponent />
        </div>
      </footer>
    </div>
  );
}
