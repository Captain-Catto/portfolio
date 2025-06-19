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
  keywords: [
    "Lê Quang Trí Đạt",
    "Portfolio",
    "Frontend Developer",
    "React",
    "Next.js",
    "Web Developer",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Lê Quang Trí Đạt" }],
  creator: "Lê Quang Trí Đạt",
  metadataBase: new URL("https://www.lequangtridat.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://www.lequangtridat.com",
    title: "Portfolio - Lê Quang Trí Đạt",
    description:
      "Portfolio cá nhân của Lê Quang Trí Đạt, giới thiệu về bản thân, kỹ năng và các dự án đã thực hiện.",
    siteName: "Portfolio - Lê Quang Trí Đạt",
    images: [
      {
        url: "https://www.lequangtridat.com/meta.png",
        width: 1200,
        height: 630,
        alt: "Portfolio - Lê Quang Trí Đạt",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Lê Quang Trí Đạt",
    description:
      "Portfolio cá nhân của Lê Quang Trí Đạt, giới thiệu về bản thân, kỹ năng và các dự án đã thực hiện.",
    images: ["https://www.lequangtridat.com/meta.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={inter.className}>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
