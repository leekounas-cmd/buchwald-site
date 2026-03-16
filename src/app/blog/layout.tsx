import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Health Blog | Buchwald Family Dentistry | Richardson, TX",
  description:
    "Dental health tips, guides, and insights from Buchwald Family Dentistry in Richardson, TX. Serving patients in Plano, Allen, and the surrounding communities.",
  openGraph: {
    title: "Dental Health Blog | Buchwald Family Dentistry | Richardson, TX",
    description:
      "Dental health tips, guides, and insights from Buchwald Family Dentistry in Richardson, TX. Serving Plano, Allen, and surrounding areas.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
