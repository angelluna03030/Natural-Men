import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Natural Men - Belleza Natural y Cuidado para Hombres",
  description: "Descubre nuestra exclusiva selección de productos de belleza y cuidado personal para hombres, elaborados con ingredientes naturales. En Natural Men, creemos en el poder de lo natural para realzar tu bienestar y apariencia. Encuentra todo lo que necesitas para tu rutina de cuidado personal, desde tratamientos para la piel y el cabello hasta soluciones de aseo, todos diseñados específicamente para el hombre moderno que valora la calidad y la naturalidad.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}</body>
    </html>
  );
}
