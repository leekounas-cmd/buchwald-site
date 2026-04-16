import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership Plans | No Insurance Needed | Buchwald Family Dentistry | Richardson, TX",
  description:
    "In-house dental discount plans for patients without insurance. Essential at $400/year or Signature at $899/year. Two cleanings, exams, X-rays, and 20% off all treatments. Richardson, TX.",
  alternates: {
    canonical: "https://www.buchwaldfamilydentistry.com/membership",
  },
  openGraph: {
    title: "Dental Membership Plans | Buchwald Family Dentistry",
    description:
      "Skip the insurance hassle. Essential Plan $400/yr or Signature Plan $899/yr. Two cleanings, exams, X-rays included. 20% off everything else.",
  },
};

export default function MembershipLayout({ children }: { children: React.ReactNode }) {
  return children;
}
