"use client";

export function UrgencyBadge({
  variant = "same-day",
  className = "",
}: {
  variant?: "same-day" | "slots" | "accepting";
  className?: string;
}) {
  const configs = {
    "same-day": { text: "Same-day appointments available", pulse: true },
    slots: { text: "Limited new patient slots this week", pulse: true },
    accepting: { text: "Now accepting new patients", pulse: false },
  };

  const config = configs[variant];

  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-medium ${className}`}>
      {config.pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
        </span>
      )}
      {config.text}
    </div>
  );
}
