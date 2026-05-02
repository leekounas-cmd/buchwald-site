import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Whitening For New Patients | Buchwald Family Dentistry",
  description:
    "Get your teeth cleaned with us and we'll add a free in-office Opalescence Boost whitening, a $600 retail value, on the house. Richardson, TX.",
  alternates: {
    canonical: "https://www.buchwaldfamilydentistry.com/whitening-free",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Free Whitening For New Patients | Buchwald Family Dentistry",
    description:
      "Get your teeth cleaned with us. Free in-office Opalescence Boost whitening, a $600 retail value, on the house. Richardson, TX.",
    images: [{ url: "/images/office-1.jpg", width: 1200, height: 630 }],
  },
};

export default function WhiteningFreeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
