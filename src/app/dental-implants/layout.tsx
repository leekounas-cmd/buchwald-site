import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Implants | Permanent Tooth Replacement | Buchwald Family Dentistry | Richardson, TX",
  description:
    "Dental implants in Richardson, TX. Natural-looking, permanent tooth replacement by Dr. Buchwald. Serving Plano, Allen, Garland, and Coppell.",
  openGraph: {
    title: "Dental Implants | Permanent Tooth Replacement | Buchwald Family Dentistry",
    description:
      "Dental implants in Richardson, TX. Natural-looking, permanent tooth replacement by Dr. Buchwald.",
  },
};

export default function DentalImplantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
