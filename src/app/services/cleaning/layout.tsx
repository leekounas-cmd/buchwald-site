import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Cleaning & Exam | Buchwald Family Dentistry | Richardson, TX",
  description:
    "Professional dental cleanings, exams, and digital X-rays at Buchwald Family Dentistry in Richardson, TX. Serving Richardson, Plano, Allen & Garland. New patients welcome.",
  openGraph: {
    title: "Dental Cleaning & Exam | Buchwald Family Dentistry",
    description:
      "Routine cleanings, comprehensive exams, and digital X-rays at Buchwald Family Dentistry in Richardson, TX.",
  },
};

export default function CleaningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
