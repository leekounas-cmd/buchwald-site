"use client";

const BOOKING_URL =
  "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE";

export function StickyBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-md border-t border-white/10 py-3 px-4 flex items-center justify-between gap-3 lg:hidden">
      <a
        href="tel:972-644-3280"
        className="flex-1 rounded-xl bg-white/10 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/20"
      >
        Call Us
      </a>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 rounded-xl bg-primary py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
      >
        Book Appointment
      </a>
    </div>
  );
}
