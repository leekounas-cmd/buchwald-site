"use client";

import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-white text-center py-2.5 px-4 text-sm font-medium">
      <Link href="/invisalign" className="hover:underline">
        Limited Time: <span className="font-bold">$1,000 OFF</span> Invisalign Treatment →
      </Link>
    </div>
  );
}
