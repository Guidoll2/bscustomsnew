import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BS Customs | Global Trade Solutions",
  description: "Especializados en la importación y exportación de vehículos de transporte, maquinaria agrícola y maquinaria vial. Specialized in import and export of transport vehicles, agricultural machinery, and road equipment.",
  keywords: ["customs", "import", "export", "Argentina", "international trade", "logistics", "agricultural machinery", "transport vehicles"],
  authors: [{ name: "BS Customs" }],
  openGraph: {
    title: "BS Customs | Global Trade Solutions",
    description: "Connecting Argentina with the world through excellence in customs services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
