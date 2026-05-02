"use client";

import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-white text-center py-2.5 px-4 text-[13px] font-medium tracking-wide">
      <Link href="/whitening-free" className="hover:underline">
        New Patients: <span className="font-bold">FREE</span> in-office whitening with your visit →
      </Link>
    </div>
  );
}
