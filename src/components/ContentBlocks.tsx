"use client";

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-primary/5 rounded-xl p-5 text-center">
      <p className="text-3xl sm:text-4xl font-extrabold text-primary">{value}</p>
      <p className="text-gray-500 text-xs font-medium mt-1">{label}</p>
    </div>
  );
}

export function StatRow({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className={`grid grid-cols-${stats.length} gap-3 mb-6`}>
      {stats.map((s) => (
        <Stat key={s.label} value={s.value} label={s.label} />
      ))}
    </div>
  );
}

export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-50 border-l-4 border-primary rounded-r-xl p-4 my-5">
      <p className="text-gray-700 text-sm font-semibold leading-relaxed">{children}</p>
    </div>
  );
}

export function Checklist({ items }: { items: string[] }) {
  return (
    <div className="space-y-2 my-4">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-2.5">
          <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <p className="text-gray-600 text-sm">{item}</p>
        </div>
      ))}
    </div>
  );
}

export function Versus({ left, right, leftLabel, rightLabel }: { left: string[]; right: string[]; leftLabel: string; rightLabel: string }) {
  return (
    <div className="grid grid-cols-2 gap-3 my-5">
      <div className="bg-primary/5 rounded-xl p-4">
        <p className="text-primary text-xs font-bold uppercase tracking-wider mb-3">{leftLabel}</p>
        <ul className="space-y-2">
          {left.map((item) => (
            <li key={item} className="text-gray-600 text-sm flex items-start gap-2">
              <span className="text-primary mt-0.5">+</span>{item}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-50 rounded-xl p-4">
        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">{rightLabel}</p>
        <ul className="space-y-2">
          {right.map((item) => (
            <li key={item} className="text-gray-500 text-sm flex items-start gap-2">
              <span className="text-gray-300 mt-0.5">&ndash;</span>{item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function NumberedList({ items }: { items: { title: string; desc: string }[] }) {
  return (
    <div className="space-y-4 my-4">
      {items.map((item, i) => (
        <div key={item.title} className="flex gap-4 items-start">
          <span className="text-primary text-2xl font-extrabold flex-shrink-0">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <p className="font-bold text-gray-900 text-sm">{item.title}</p>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function CompareCard({ title, items }: { title: string; items: { label: string; a: string; b: string; aLabel?: string; bLabel?: string }[] }) {
  return (
    <div className="bg-gray-50 rounded-xl p-5 my-5">
      <p className="font-bold text-gray-900 text-sm mb-4">{title}</p>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.label} className="grid grid-cols-[80px_1fr_1fr] gap-3 text-xs">
            <span className="text-primary font-bold uppercase">{item.label}</span>
            <span className="text-gray-700">{item.a}</span>
            <span className="text-gray-400">{item.b}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
