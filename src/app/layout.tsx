import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { StickyBottomBar } from "@/components/StickyBottomBar";
import { Footer } from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Buchwald Family Dentistry & Orthodontics | Richardson, TX",
  description:
    "Modern family and cosmetic dentistry in Richardson, TX. Dr. Max Buchwald Jr. and team offer cleanings, Invisalign, whitening, laser therapy, and more.",
  openGraph: {
    title: "Buchwald Family Dentistry & Orthodontics",
    description:
      "Your local family and cosmetic dentist in Richardson, TX. Modern care, comfortable visits.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} antialiased`}>
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyBottomBar />
      </body>
    </html>
  );
}
