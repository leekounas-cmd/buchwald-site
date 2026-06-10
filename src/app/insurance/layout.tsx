import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance & Financing | Buchwald Family Dentistry | Richardson, TX",
  description:
    "We accept most major PPO dental plans in Richardson, TX. Cleanings, exams & X-rays covered at 100% by most PPOs. No insurance? Essential Care Plan from $400/year or Signature Plan at $899/year. Call (972) 644-3280.",
  alternates: {
    canonical: "/insurance",
  },
  openGraph: {
    title: "Insurance & Financing | Buchwald Family Dentistry",
    description:
      "We accept most major PPO dental plans in Richardson, TX. Cleanings covered at 100% by most PPOs. Membership plans available from $400/year.",
  },
};

export default function InsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
