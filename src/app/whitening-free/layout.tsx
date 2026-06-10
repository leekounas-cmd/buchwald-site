import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your New Patient Visit, Covered by Insurance | Buchwald Family Dentistry",
  description:
    "Most PPO insurance covers your new patient cleaning, exam, and X-rays at 100%. We verify your benefits before your visit. Richardson, TX.",
  alternates: {
    canonical: "/whitening-free",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Your New Patient Visit, Covered by Insurance | Buchwald Family Dentistry",
    description:
      "Most PPO insurance covers your new patient cleaning, exam, and X-rays at 100%. Benefits verified before your visit. Richardson, TX.",
    images: [{ url: "/images/office-1.jpg", width: 1200, height: 630 }],
  },
};

export default function WhiteningFreeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
