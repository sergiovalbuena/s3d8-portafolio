import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import LiquidSideNav from "../components/LiquidNavBar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({
  //weight: ["400", "700", "900"],
  //style: ["normal", "italic"],
  subsets: ["latin"],
  //display: "swap",
});

export const metadata: Metadata = {
  title: "Sergio Valbuena",
  description: "portafolio of a web developer, product designer, and 3d artist",
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
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
