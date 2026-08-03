import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Patient Forms | Buchwald Family Dentistry",
  description:
    "You're booked. Complete your new patient forms and upload your insurance card before your visit to Buchwald Family Dentistry in Richardson, TX.",
  alternates: {
    canonical: "/forms",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function FormsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
