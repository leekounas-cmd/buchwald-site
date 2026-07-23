"use client";

import { PHONE_HREF } from "@/lib/offer";
import { fireEvent } from "@/lib/track";

export function StickyCallBar({ page }: { page: string }) {
  function fireTel() {
    fireEvent("tel_click", page);
  }

  function scrollToForm() {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center gap-3 border-t border-gray-200 bg-white px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] lg:hidden">
      <a
        href={PHONE_HREF}
        onClick={fireTel}
        className="flex-1 rounded-lg bg-gray-100 py-3 min-h-[44px] text-center text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-200"
      >
        Call
      </a>
      <button
        onClick={scrollToForm}
        className="flex-1 rounded-lg bg-primary py-3 min-h-[44px] text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
      >
        Get Started
      </button>
    </div>
  );
}
