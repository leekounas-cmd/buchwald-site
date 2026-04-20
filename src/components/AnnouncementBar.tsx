"use client";

import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-white text-center py-2.5 px-4 text-[13px] font-medium tracking-wide">
      <Link href="/new-patient" className="hover:underline">
        New Patients Only: <span className="font-bold">$149</span> Cleaning, Exam &amp; X-rays →
      </Link>
    </div>
  );
}
