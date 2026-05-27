import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Patient | Your First Visit | Buchwald Family Dentistry | Richardson, TX",
  description:
    "Welcome to Buchwald Family Dentistry. Your new patient cleaning, exam, and X-rays are covered at 100% by most PPO insurance. Serving Richardson, Plano, Allen, and Garland, TX.",
  openGraph: {
    title: "New Patient | Your First Visit | Buchwald Family Dentistry",
    description:
      "Welcome to Buchwald Family Dentistry. Your new patient cleaning, exam, and X-rays are covered at 100% by most PPO insurance. Serving Richardson, Plano, Allen, and Garland, TX.",
  },
};

export default function NewPatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
