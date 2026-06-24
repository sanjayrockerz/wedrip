import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { StickyNav } from "@/components/nav/StickyNav";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WeDrip — India's merch agency for creators",
  description:
    "India's merch agency for creators. We design it, build the store, handle production. You just show up.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StickyNav />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
