import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Appointment | Buchwald Family Dentistry | Richardson, TX",
  description:
    "Request an appointment at Buchwald Family Dentistry in Richardson, TX. New patients welcome. Fill out our form and we'll confirm your visit.",
  openGraph: {
    title: "Request Appointment | Buchwald Family Dentistry",
    description:
      "Book your visit at Buchwald Family Dentistry in Richardson, TX. New patients welcome.",
  },
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
