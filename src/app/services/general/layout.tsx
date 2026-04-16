import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Dentistry | Fillings, Crowns & Root Canals | Buchwald Family Dentistry | Richardson, TX",
  description:
    "Fillings, crowns, root canals, extractions, and gum treatment at Buchwald Family Dentistry in Richardson, TX. 4.9 stars. Call (972) 644-3280.",
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
