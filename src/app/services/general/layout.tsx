import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Dentistry | Fillings, Crowns & Root Canals | Richardson, TX",
  description:
    "Fillings, crowns, root canals, extractions, and gum treatment at Buchwald Family Dentistry in Richardson, TX. Serving Richardson, Plano, Allen & Garland.",
  openGraph: {
    title: "General Dentistry | Buchwald Family Dentistry",
    description:
      "Fillings, crowns, root canals, and more at Buchwald Family Dentistry in Richardson, TX.",
  },
};

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
