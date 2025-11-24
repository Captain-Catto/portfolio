import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { PreloadCriticalResources } from "@/components/PreloadCriticalResources";
import { LoadingScreen } from "@/components/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Improve font loading performance
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Bento Grid Portfolio - Le Quang Tri Dat",
  description:
    "Full Stack Developer portfolio with scalable bento grid layout supporting multiple projects",
  keywords:
    "portfolio, full stack developer, web developer, react, next.js, node.js",
  authors: [{ name: "Le Quang Tri Dat" }],
  robots: "index, follow",
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
