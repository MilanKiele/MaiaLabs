/*
File: Layout.tsx
Description: This is the root layout for the application.
*/

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import AuthProvider from "@/context/AuthProvider";
import Navbar from "@/components/base/Navbar";
import Footer from "@/components/base/Footer";

// Font Inter
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Authentication App",
  description: "Authentication App Template for Next.js",
  creator: "by Milan Kiele",
  icons: { apple: "/logo.jpg" },
  applicationName: "MAuthentication App",
  keywords: ["Template", "Next.js", "Authentication", "Milan"],
  // manifest: "/manifest.json",
};

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
        <body className={inter.className}>
          <div className="p-2 m-0 w-full h-full min-h-[100vh] flex flex-col justify-between">
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
      </AuthProvider>
    </html>
  );
}
