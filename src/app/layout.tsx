import "./globals.css";
import type { Metadata } from "next";
import { Luckiest_Guy } from "next/font/google";
import Navbar from "./components/navbar/page";

const luckiestGuy = Luckiest_Guy({
    weight: "400",
  subsets: ["latin"],
  variable: "--font-luckiest-guy",
});

export const metadata: Metadata = {
  title: "ZampApp",
  description: "La tua app per amici a quattro zampe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  return (
    <html lang="it">
      <body className={`${luckiestGuy.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
