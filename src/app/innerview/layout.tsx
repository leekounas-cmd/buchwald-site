import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "InnerView Imaging | Buchwald Family Dentistry | Richardson, TX",
  description:
    "See your smile in full detail with InnerView intraoral imaging at Buchwald Family Dentistry in Richardson, TX.",
  openGraph: {
    title: "InnerView Imaging | Buchwald Family Dentistry",
    description:
      "Advanced intraoral imaging for transparent, personalized dental care.",
  },
};

export default function InnerViewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
