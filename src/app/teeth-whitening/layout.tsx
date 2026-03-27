import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teeth Whitening | Buchwald Family Dentistry | Richardson, TX",
  description:
    "Professional teeth whitening at Buchwald Family Dentistry in Richardson, TX. In-office and take-home options. Results in one visit. Book today.",
  openGraph: {
    title: "Teeth Whitening | Buchwald Family Dentistry",
    description:
      "Brighten your smile with professional whitening at Buchwald Family Dentistry.",
  },
};

export default function TeethWhiteningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
