import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "InnerView Imaging | Buchwald Family Dentistry | Richardson, TX",
  description:
    "FDA-cleared AI diagnostic technology that detects cracks, failing restorations, and implant issues invisible to X-rays. Serving Richardson, Plano, and Allen.",
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
