import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your First Visit, Made Easy | Buchwald Family Dentistry",
  description:
    "Exam, x-rays, and cleaning, plus free Jet Whitening and take-home whitening trays. Most PPO plans cover the visit at 100%. Richardson, TX.",
  alternates: {
    canonical: "/visit",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Your First Visit, Made Easy | Buchwald Family Dentistry",
    description:
      "Exam, x-rays, and cleaning, plus free Jet Whitening and take-home whitening trays. Richardson, TX.",
    images: [{ url: "/images/office-1.jpg", width: 1200, height: 630 }],
  },
};

export default function VisitLayout({ children }: { children: React.ReactNode }) {
  return children;
}
