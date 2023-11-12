import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import LiquidSideNav from "../components/LiquidNavBar";

const montserrat = Montserrat({
  //weight: ["400", "700", "900"],
  //style: ["normal", "italic"],
  subsets: ["latin"],
  //display: "swap",
});

export const metadata: Metadata = {
  title: "Sergio Valbuena",
  description: "portfolio of a web developer, product designer, and artist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <LiquidSideNav />
        {children}
      </body>
    </html>
  );
}
