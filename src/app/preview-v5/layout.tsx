import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homepage Concept v5 | Buchwald Family Dentistry",
  description: "Internal design concept. Not the live homepage.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PreviewV5Layout({ children }: { children: React.ReactNode }) {
  return children;
}
