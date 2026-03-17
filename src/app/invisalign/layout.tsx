import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invisalign | Buchwald Family Dentistry | Richardson, TX",
  description:
    "Invisalign clear aligners starting at $115/month at Buchwald Family Dentistry in Richardson, TX. 0% APR financing available. Free consultation.",
  openGraph: {
    title: "Invisalign | Buchwald Family Dentistry",
    description:
      "Invisalign clear aligners starting at $115/month. 0% APR financing at Buchwald Family Dentistry in Richardson, TX.",
  },
};

export default function InvisalignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
