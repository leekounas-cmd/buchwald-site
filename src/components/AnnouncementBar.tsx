"use client";

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-white py-2.5 px-4 text-[13px] font-medium tracking-wide">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-1 sm:gap-4">
        <a
          href="https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-center"
        >
          New Patients Only: <span className="font-bold">$149</span> Cleaning, Exam &amp; X-rays →
        </a>
        <a href="tel:972-644-3280" className="hover:underline text-center whitespace-nowrap">
          <span className="opacity-80">Call</span> <span className="font-bold">(972) 644-3280</span>
        </a>
      </div>
    </div>
  );
}
