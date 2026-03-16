import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// TODO: Switch metadataBase back to https://buchwaldfamilydentist.com after domain transfer
export const metadata: Metadata = {
  metadataBase: new URL("https://buchwald-site.vercel.app"),
  title: "Buchwald Family Dentistry | Dentist in Richardson, TX",
  description:
    "Top-rated family dentist in Richardson, TX. Cleanings, Invisalign, implants, whitening, and more. 4.9 stars, 433 reviews.",
  alternates: {
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    title: "Buchwald Family Dentistry | Richardson, TX",
    description:
      "Top-rated family dentist in Richardson, TX. Modern care, comfortable visits. Serving Plano, Allen, and Garland.",
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
