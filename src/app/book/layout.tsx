import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Dental Appointment | Same-Day Available | Buchwald Family Dentistry Richardson TX",
  description:
    "Book your appointment online at Buchwald Family Dentistry in Richardson, TX. Same-day appointments available. New patient cleanings covered at 100% by most PPO insurance. Call (972) 644-3280.",
  openGraph: {
    title: "Book a Dental Appointment | Buchwald Family Dentistry",
    description:
      "Same-day appointments available. New patient cleanings covered by most PPO insurance. Buchwald Family Dentistry, Richardson TX.",
  },
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
