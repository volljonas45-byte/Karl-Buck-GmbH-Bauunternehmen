import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Buck GmbH Bauunternehmen | Biberach-Stafflangen",
  description:
    "Familienunternehmen seit 1920. Massivbauweise, Energiesanierung und handwerkliche Präzision in Biberach. Schlüsselfertig bauen, energetisch sanieren, umbauen.",
  keywords: "Bauunternehmen Biberach, Massivbau, Sanierung, Schlüsselfertig, Buck Bau",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="min-h-screen bg-[#0A0A0A] text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
