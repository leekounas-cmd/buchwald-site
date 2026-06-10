import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Archivo_Black } from "next/font/google";
import "./globals.css";
import { SiteChromeTop, SiteChromeBottom } from "@/components/SiteChrome";
import { Analytics } from "@/components/Analytics";
import { BusinessSchema } from "@/components/BusinessSchema";

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
    "Family dentist in Richardson, TX. Most PPO insurance covers your new patient cleaning, exam, and X-rays at 100%. 4.9 stars, 433+ reviews. Free lifetime warranty on all dental work. Call (972) 644-3280.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Buchwald Family Dentistry | Richardson, TX",
    description:
      "Most insurance covers your new patient visit at 100% · 4.9 stars · Free lifetime warranty · Serving Richardson, Plano, Allen & Garland.",
    type: "website",
    locale: "en_US",
    siteName: "Buchwald Family Dentistry",
    images: [{ url: "/images/office-1.jpg", width: 1200, height: 630, alt: "Buchwald Family Dentistry office in Richardson, TX" }],
  },
  twitter: {
    card: "summary_large_image",
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
        <SiteChromeTop />
        <main>{children}</main>
        <SiteChromeBottom />
        <Analytics />
      </body>
    </html>
  );
}
