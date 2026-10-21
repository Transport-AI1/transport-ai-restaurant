
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Transport AI Restaurant | Diseño web gastronómico",
  description:
    "Demostración de diseño web para un restaurante ficticio creada por Transport AI. Diseño profesional, carta digital y experiencia de reservas.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
