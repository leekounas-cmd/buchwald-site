import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homepage Concept v7 | Buchwald Family Dentistry",
  description: "Internal design concept. Not the live homepage.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PreviewV7Layout({ children }: { children: React.ReactNode }) {
  return children;
}
