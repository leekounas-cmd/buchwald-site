import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas We Serve | Buchwald Family Dentistry | Richardson, TX",
  description:
    "Buchwald Family Dentistry serves Richardson, Plano, Allen, Garland, Coppell, and Carrollton, TX. Modern care, comfortable visits. Call (972) 644-3280.",
  openGraph: {
    title: "Areas We Serve | Buchwald Family Dentistry | Richardson, TX",
    description:
      "Buchwald Family Dentistry serves Richardson, Plano, Allen, Garland, Coppell, and Carrollton, TX. Modern care, comfortable visits. Call (972) 644-3280.",
    url: "https://buchwaldfamilydentistry.com/areas",
    siteName: "Buchwald Family Dentistry",
    type: "website",
  },
};

export default function AreasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
