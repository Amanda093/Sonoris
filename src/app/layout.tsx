import type { Metadata } from "next";
import { Rubik, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  // 400 = regular, 600 = semibold, 700 = bold, 800 = extrabold
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  // 400 = regular, 600 = semibold, 700 = bold, 800 = extrabold
});

export const metadata: Metadata = {
  title: "Sonoris | Transcrição de Áudio",
  description: "Site da Sonoris",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${rubik.variable} ${sourceSans3.variable} antialiased overflow-x-hidden`}>{children}</body>
    </html>
  );
}
