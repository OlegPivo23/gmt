import HeaderComponent from "../header/HeaderComponent";
export default function MainLayout({ children }) {
  return (
    <div>
      <header>
        <HeaderComponent />
      </header>
      {children}
      <footer>footer</footer>
    </div>
  );
}
