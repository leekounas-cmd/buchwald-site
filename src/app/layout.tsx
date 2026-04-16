import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Archivo_Black } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { StickyBottomBar } from "@/components/StickyBottomBar";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { BusinessSchema } from "@/components/BusinessSchema";
import { NewPatientPopup } from "@/components/NewPatientPopup";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const archivoBlack = Archivo_Black({
  weight: "400",
  variable: "--font-archivo-black",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://buchwaldfamilydentistry.com"),
  title: "Buchwald Family Dentistry | Dentist in Richardson, TX",
  description:
    "Top-rated family dentist in Richardson, TX. Cleanings, Invisalign, implants, whitening, and more. 4.9 stars, 433 reviews.",
  alternates: {
    canonical: "https://www.buchwaldfamilydentistry.com",
    languages: {
      "en-US": "https://www.buchwaldfamilydentistry.com",
    },
  },
  openGraph: {
    title: "Buchwald Family Dentistry | Richardson, TX",
    description:
      "Top-rated family dentist in Richardson, TX. Modern care, comfortable visits. Serving Plano, Allen, and Garland.",
    type: "website",
    locale: "en_US",
    siteName: "Buchwald Family Dentistry",
    images: [{ url: "/images/office-1.jpg", width: 1200, height: 630, alt: "Buchwald Family Dentistry office in Richardson, TX" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buchwald Family Dentistry | Dentist in Richardson, TX",
    description:
      "Top-rated family dentist in Richardson, TX. Cleanings, Invisalign, implants, whitening, and more. 4.9 stars, 433 reviews.",
    images: ["/images/office-1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} ${archivoBlack.variable} antialiased`} style={{ fontFamily: "var(--font-plus-jakarta)" }}>
        <BusinessSchema />
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyBottomBar />
        <NewPatientPopup />
        <Analytics />
      </body>
    </html>
  );
}
