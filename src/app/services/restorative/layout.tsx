import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restorative Dentistry | Implants, Crowns & Bridges | Buchwald Family Dentistry | Richardson, TX",
  description:
    "Dental implants, crowns, bridges, and dentures at Buchwald Family Dentistry in Richardson, TX. Serving Richardson, Plano, Allen & Garland. Natural-looking results.",
  openGraph: {
    title: "Restorative Dentistry | Buchwald Family Dentistry",
    description:
      "Implants, crowns, bridges, and dentures at Buchwald Family Dentistry in Richardson, TX.",
  },
};

export default function RestorativeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
