"use client";

import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-white py-2.5 px-4 text-[13px] font-medium tracking-wide">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-1 sm:gap-4">
        <Link href="/new-patient" className="hover:underline text-center">
          New Patients Only: <span className="font-bold">$149</span> Cleaning, Exam &amp; X-rays →
        </Link>
        <a href="tel:972-644-3280" className="hover:underline text-center whitespace-nowrap">
          <span className="opacity-80">Call</span> <span className="font-bold">(972) 644-3280</span>
        </a>
      </div>
    </div>
  );
}
