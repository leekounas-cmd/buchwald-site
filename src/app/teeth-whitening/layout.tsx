import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teeth Whitening | Buchwald Family Dentistry | Richardson, TX",
  description:
    "Professional teeth whitening in Richardson, TX. In-office and custom take-home options for a brighter smile at Buchwald Family Dentistry.",
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
