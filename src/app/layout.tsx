import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
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
      <body
        className={`${playfair.variable} ${dmSans.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
