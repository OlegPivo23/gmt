'use client'
import "./globals.scss";
import { Provider } from "react-redux";
import store from "../stores/store";

// export const metadata = {
//   title: "ГМТ",
//   description: "Веб приложение ГМТ",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body>{children}</body>
      </Provider>
    </html>
  );
}
