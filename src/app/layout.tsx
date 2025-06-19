import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio - Lê Quang Trí Đạt",
  description:
    "Portfolio cá nhân của Lê Quang Trí Đạt, giới thiệu về bản thân, kỹ năng và các dự án đã thực hiện.",
  openGraph: {
    title: "Portfolio - Lê Quang Trí Đạt",
    description:
      "Portfolio cá nhân của Lê Quang Trí Đạt, giới thiệu về bản thân, kỹ năng và các dự án đã thực hiện.",
    images: [
      {
        url: "/meta.png",
        width: 1000,
        height: 500,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
