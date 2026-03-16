"use client";

const BOOKING_URL = "/book";

export function StickyBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 py-3 px-4 flex items-center gap-3 lg:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <a
        href="tel:972-644-3280"
        className="flex-1 rounded-lg bg-gray-100 py-3 text-center text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-200"
      >
        Call Us
      </a>
      <a
        href={BOOKING_URL}
        className="flex-1 rounded-lg bg-primary py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
      >
        Book Appointment
      </a>
    </div>
  );
}
