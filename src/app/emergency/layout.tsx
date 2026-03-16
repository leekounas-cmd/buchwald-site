import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Dentist Richardson TX | Same-Day Care | Buchwald Family Dentistry",
  description:
    "Dental emergency in Richardson, TX? Call (972) 644-3280 for same-day care. Cracked teeth, toothaches, lost fillings — we're here to help. Serving Plano, Allen, and Garland.",
  openGraph: {
    title: "Emergency Dentist Richardson TX | Same-Day Care | Buchwald Family Dentistry",
    description:
      "Dental emergency in Richardson, TX? Call (972) 644-3280 for same-day care. Cracked teeth, toothaches, lost fillings — we're here to help.",
  },
};

export default function EmergencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
