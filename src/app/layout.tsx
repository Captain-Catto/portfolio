import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { PreloadCriticalResources } from "@/components/PreloadCriticalResources";
import { LoadingScreen } from "@/components/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.lequangtridat.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Portfolio - Le Quang Tri Dat",
  description:
    "Welcome to my portfolio website containing my projects and experience in web development",
  keywords:
    "portfolio, full stack developer, web developer, react, next.js, node.js",
  authors: [{ name: "Le Quang Tri Dat" }],
  robots: "index, follow",
  openGraph: {
    title: "Portfolio - Le Quang Tri Dat",
    description:
      "Welcome to my portfolio website containing my projects and experience in web development",
    type: "website",
    locale: "en_US",
    siteName: "Le Quang Tri Dat Portfolio",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Le Quang Tri Dat Portfolio",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <PreloadCriticalResources />
        <LoadingScreen />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
