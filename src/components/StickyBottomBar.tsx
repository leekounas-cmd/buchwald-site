"use client";
import { usePathname } from "next/navigation";
import { trackConversion } from "@/components/Analytics";
import { fireEvent } from "@/lib/track";
const BOOKING_URL = "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE";
export function StickyBottomBar() {
  const pathname = usePathname();
  if (pathname === "/reschedule") return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 py-3 px-4 flex items-center gap-2 lg:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <a
        href="tel:972-644-3280"
        onClick={() => {
          fireEvent("tel_click", pathname ?? "/");
          trackConversion(process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL);
        }}
        className="flex-1 rounded-full bg-gray-100 py-3 text-center text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-200"
      >
        Call
      </a>
      <a
        href="sms:9726443280"
        onClick={() => fireEvent("sms_click", pathname ?? "/")}
        className="flex-1 rounded-full bg-gray-100 py-3 text-center text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-200"
      >
        Text
      </a>
      <a
        href={BOOKING_URL}
        onClick={() => fireEvent("booking_click", pathname ?? "/")}
        className="flex-1 rounded-full bg-primary py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
      >
        Schedule
      </a>
    </div>
  );
}
