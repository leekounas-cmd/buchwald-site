import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cosmetic Dentistry | Veneers, Bonding & Smile Makeovers | Richardson, TX",
  description:
    "Porcelain veneers, dental bonding, teeth whitening, and smile makeovers at Buchwald Family Dentistry in Richardson, TX. Serving Richardson, Plano, Allen & Garland.",
  openGraph: {
    title: "Cosmetic Dentistry | Buchwald Family Dentistry",
    description:
      "Veneers, bonding, whitening, and smile makeovers at Buchwald Family Dentistry in Richardson, TX.",
  },
};

export default function CosmeticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
