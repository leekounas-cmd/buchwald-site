import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laser Therapy | Buchwald Family Dentistry | Richardson, TX",
  description:
    "Advanced laser dental therapy in Richardson, TX. Minimally invasive treatments with less discomfort and faster recovery at Buchwald Family Dentistry.",
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
