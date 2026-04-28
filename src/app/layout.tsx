import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="es-MX" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
