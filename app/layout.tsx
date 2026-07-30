import type { Metadata } from "next";
import { Libre_Franklin, Piazzolla } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

const piazzolla = Piazzolla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-piazzolla",
  display: "swap",
});

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-libre-franklin",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Palmeira Junior Advocacia",
    template: "%s — Palmeira Junior Advocacia",
  },
  description:
    "Orientação jurídica com clareza, do primeiro contato ao acompanhamento do caso — Direito de Família, Cível, Empresarial e Trabalhista.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${piazzolla.variable} ${libreFranklin.variable}`}>
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
