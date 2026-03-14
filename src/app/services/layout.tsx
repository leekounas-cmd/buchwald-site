import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Buchwald Family Dentistry | Richardson, TX",
  description:
    "Comprehensive dental services in Richardson, TX. Cleanings, cosmetic dentistry, Invisalign, whitening, laser therapy, and more.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
