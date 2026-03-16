import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laser Therapy | Buchwald Family Dentistry | Richardson, TX",
  description:
    "Advanced laser dental therapy at Buchwald Family Dentistry in Richardson, TX. Minimally invasive gum treatment with faster recovery. Serving Richardson, Plano, Allen & Garland.",
  openGraph: {
    title: "Laser Therapy | Buchwald Family Dentistry",
    description:
      "Gentler, more precise dental treatments with advanced laser technology.",
  },
};

export default function LaserTherapyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
