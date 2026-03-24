import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your April Cleaning | Buchwald Family Dentistry | Richardson, TX",
  description:
    "Schedule your dental cleaning at Buchwald Family Dentistry in Richardson, TX. April appointments available now.",
  openGraph: {
    title: "Book Your April Cleaning | Buchwald Family Dentistry",
    description:
      "April hygiene appointments are filling up. Book your cleaning at Buchwald Family Dentistry in Richardson, TX.",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AprilLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
