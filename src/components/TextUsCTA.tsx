"use client";

const PHONE = "9726443280";
const DISPLAY = "(972) 644-3280";

export function TextUsCTA({
  variant = "button",
  className = "",
}: {
  variant?: "button" | "inline" | "pill";
  className?: string;
}) {
  if (variant === "inline") {
    return (
      <a
        href={`sms:${PHONE}`}
        className={`text-gray-400 hover:text-white underline underline-offset-2 transition-colors ${className}`}
      >
        Text us
      </a>
    );
  }

  if (variant === "pill") {
    return (
      <a
        href={`sms:${PHONE}`}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all ${className}`}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 3H14V11H8.5L5 14V11H2V3Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Text Us
      </a>
    );
  }

  return (
    <a
      href={`sms:${PHONE}`}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all ${className}`}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 3H14V11H8.5L5 14V11H2V3Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Text {DISPLAY}
    </a>
  );
}
