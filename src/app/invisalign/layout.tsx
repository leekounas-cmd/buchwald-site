import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invisalign | Buchwald Family Dentistry | Richardson, TX",
  description:
    "Get $1,000 off Invisalign clear aligners at Buchwald Family Dentistry in Richardson, TX. Straighten your teeth discreetly with expert care.",
  openGraph: {
    title: "Invisalign | Buchwald Family Dentistry",
    description:
      "Clear aligners for a straighter smile. $1,000 off Invisalign at Buchwald Family Dentistry in Richardson, TX.",
  },
};

export default function InvisalignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
