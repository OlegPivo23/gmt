import "./globals.scss";

export const metadata = {
  title: "ГМТ",
  description: "Веб приложение ГМТ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
