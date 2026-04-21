import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Whitening With Your New Patient Visit | Buchwald Family Dentistry",
  description:
    "Insured? Your cleaning, exam & X-rays are usually 100% covered, and we'll throw in a free Opalescence Boost whitening ($600 value). Richardson, TX.",
  alternates: {
    canonical: "https://www.buchwaldfamilydentistry.com/whitening-free",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Free Whitening With Your New Patient Visit | Buchwald Family Dentistry",
    description:
      "Insured? Your cleaning is covered. We'll throw in a free Opalescence Boost whitening ($600 value). Richardson, TX.",
    images: [{ url: "/images/office-1.jpg", width: 1200, height: 630 }],
  },
};

export default function WhiteningFreeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
