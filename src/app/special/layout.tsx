import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "$149 New Patient Voucher | Buchwald Family Dentistry",
  description:
    "Claim your $149 New Patient Voucher in Richardson, TX. Cleaning, exam, X-rays + Bonus Jet Whitening. $800+ value. Only a limited number of vouchers available.",
  alternates: {
    canonical: "https://www.buchwaldfamilydentistry.com/special",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Claim Your $149 New Patient Voucher | Buchwald Family Dentistry",
    description:
      "$149 New Patient Voucher in Richardson, TX. Cleaning, exam, X-rays + Bonus Jet Whitening. $800+ value.",
    images: [{ url: "/images/office-1.jpg", width: 1200, height: 630 }],
  },
};

export default function SpecialLayout({ children }: { children: React.ReactNode }) {
  return children;
}
