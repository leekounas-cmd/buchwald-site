import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance & Financing | Buchwald Family Dentistry | Richardson, TX",
  description:
    "We accept most major PPO dental plans in Richardson, TX. No insurance? $149 new patient special + Essential Care Plan from $99/year. Call (972) 644-3280.",
  openGraph: {
    title: "Insurance & Financing | Buchwald Family Dentistry",
    description:
      "We accept most major PPO dental plans in Richardson, TX. No insurance? $149 new patient special + Essential Care Plan from $99/year.",
  },
};

export default function InsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
