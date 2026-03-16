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
  metadataBase: new URL("https://buchwaldfamilydentist.com"),
  title: "Buchwald Family Dentistry & Orthodontics | Dentist in Richardson, TX",
  description:
    "Top-rated family and cosmetic dentist in Richardson, TX serving Plano, Allen, Garland, and Coppell. Dr. Max Buchwald Jr. and team offer cleanings, Invisalign, implants, whitening, laser therapy, and more. 4.9 stars on Google.",
  openGraph: {
    title: "Buchwald Family Dentistry & Orthodontics | Richardson, TX",
    description:
      "Your top-rated family and cosmetic dentist in Richardson, TX. Modern care, comfortable visits. Serving Richardson, Plano, Allen, and Garland.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/office-1.jpg", width: 1200, height: 630, alt: "Buchwald Family Dentistry office in Richardson, TX" }],
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
