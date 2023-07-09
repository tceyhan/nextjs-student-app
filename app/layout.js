import "./styles/globals.css";
import { Montserrat } from "next/font/google";


const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "TarıkCEYHAN-Sikayetvar Task",
  description: "next js ile task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true} className={montserrat.className}>
      <body  suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
