"use client";

import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-white text-center py-2.5 px-4 text-[13px] font-medium tracking-wide">
      <a href="https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE" target="_blank" rel="noopener noreferrer" className="hover:underline">
        New Patient Special: <span className="font-bold">$99</span> Exam, X-rays &amp; Consultation. Schedule your visit →
      </a>
    </div>
  );
}
