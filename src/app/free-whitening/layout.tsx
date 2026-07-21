import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Whitening for New Patients | Buchwald Family Dentistry",
  description:
    "Jet Whitening plus take-home Opalescence trays, included with your first exam and cleaning. Ends July 31. Richardson, TX.",
  alternates: {
    canonical: "/free-whitening",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Free Whitening for New Patients | Buchwald Family Dentistry",
    description:
      "Jet Whitening plus take-home Opalescence trays, included with your first exam and cleaning. Ends July 31.",
    images: [{ url: "/images/office-1.jpg", width: 1200, height: 630 }],
  },
};

export default function FreeWhiteningLayout({ children }: { children: React.ReactNode }) {
  return children;
}
