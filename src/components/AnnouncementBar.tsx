"use client";

import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-white text-center py-2.5 px-4 text-[13px] font-medium tracking-wide">
      <Link href="/invisalign" className="hover:underline">
        Invisalign starting at <span className="font-bold">$115/month</span>. Book your free consult →
      </Link>
    </div>
  );
}
