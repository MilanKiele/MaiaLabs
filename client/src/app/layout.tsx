/*
File: Layout.tsx
Description: This is the root layout for the application.
*/

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import AuthProvider from "@/context/AuthProvider";

// Font Inter
const inter = Inter({ subsets: ["latin"] });

// Metadate
export const metadata: Metadata = {
  title: "Authentication App",
  description: "Authentication App Template for Next.js",
  creator: "by Milan Kiele",
  icons: { apple: "/logo.jpg" },
  applicationName: "MAuthentication App",
  keywords: ["Template", "Next.js", "Authentication", "Milan"],
  // manifest: "/manifest.json",
};

// Viewport
export const viewport: Viewport = {
  themeColor: "#0b1015",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>{children}</body>
      </AuthProvider>
    </html>
  );
}
