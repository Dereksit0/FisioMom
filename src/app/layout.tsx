import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fisio Mom – Yoali Marín | Preparación al Parto y Estimulación Temprana",
  description:
    "Programa de preparación al parto, cesárea, taller postparto y estimulación temprana. Clases presenciales y en línea en Puebla. WhatsApp: 2226746711",
  keywords: [
    "fisioterapia maternidad",
    "preparación al parto",
    "estimulación temprana",
    "Puebla",
    "Yoali Marín",
    "Fisio Mom",
    "clases embarazo",
    "postparto",
  ],
  openGraph: {
    title: "Fisio Mom – Yoali Marín | Preparación al Parto y Estimulación Temprana",
    description:
      "Programa de preparación al parto, cesárea, taller postparto y estimulación temprana. Clases presenciales y en línea.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
