import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Buchwald Family Dentistry | Richardson, TX",
  description:
    "Comprehensive dental services in Richardson, TX. Cleanings, cosmetic dentistry, Invisalign, whitening, laser therapy, and more. Call (972) 644-3280.",
  openGraph: {
    title: "Dental Services | Buchwald Family Dentistry | Richardson, TX",
    description:
      "Cleanings, Invisalign, implants, whitening, cosmetic and restorative dentistry in Richardson, TX. Serving Plano, Allen, and Garland.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
