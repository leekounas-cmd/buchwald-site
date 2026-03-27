import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet the Team | Buchwald Family Dentistry | Richardson, TX",
  description:
    "Meet Dr. Max Buchwald Jr. and the team at Buchwald Family Dentistry in Richardson, TX. 4.9 stars, 433+ Google reviews. Real people who care.",
  openGraph: {
    title: "Meet the Team | Buchwald Family Dentistry",
    description:
      "Get to know the people behind your smile at Buchwald Family Dentistry.",
  },
};

export default function MeetUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
