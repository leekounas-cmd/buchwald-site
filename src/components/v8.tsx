import Link from "next/link";

/**
 * v8 design-language building blocks, extracted from the shipped homepage.
 * Ink #0C1820 heroes, teal ticker bands, editorial numbered rows,
 * dotted-leader ledgers, pill chips, rounded-full CTAs. No stock photos,
 * no sticker flourishes. Keep copy warm, short, no em dashes.
 */

export const INK = "#0C1820";
export const INK_SOFT = "#B9CBD4";
export const INK_MUTED = "#8FA9B5";

export function Arrow() {
  return (
    <svg
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export function Stars({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <span className="inline-flex gap-0.5 text-gold" aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

/** Dark ink hero. Children slot under the intro copy (CTAs, chips, etc.). */
export function InkHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-[#0C1820] text-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8 pb-14 sm:pt-10 sm:pb-20">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary mb-6">{eyebrow}</p>
          <h1 className="font-archivo text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.06] mb-7">{title}</h1>
          {intro && <p className="text-[#B9CBD4] text-lg leading-relaxed max-w-md mb-9">{intro}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}

/** Teal band of separated phrases. */
export function TickerBand({ items }: { items: string[] }) {
  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex flex-wrap justify-center gap-x-3 gap-y-1 text-sm font-bold text-white">
        {items.map((t, i) => (
          <span key={t} className="flex items-center gap-3">
            {t}
            {i < items.length - 1 && (
              <span aria-hidden className="text-white/50">
                ·
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl mb-12">
      <p className={`text-xs font-bold uppercase tracking-[0.22em] mb-4 ${light ? "text-primary" : "text-primary-dark"}`}>
        {eyebrow}
      </p>
      <h2 className="font-archivo text-4xl sm:text-5xl leading-[1.05]">{title}</h2>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed ${light ? "text-[#B9CBD4]" : "text-gray-500"}`}>{intro}</p>
      )}
    </div>
  );
}

export type NumberedRow = {
  n: string;
  title: string;
  body: string;
  meta?: string;
  cta?: { label: string; href: string; external?: boolean; onClickEvent?: never };
};

/** Editorial numbered rows: big Archivo number, title + optional dotted-leader meta, body, optional CTA. */
export function NumberedRows({ rows }: { rows: NumberedRow[] }) {
  return (
    <div>
      {rows.map((r) => (
        <div key={r.n} className="grid sm:grid-cols-[110px_1fr] gap-x-10 gap-y-4 border-t border-gray-200 py-10">
          <span className="font-archivo text-4xl text-primary">{r.n}</span>
          <div>
            <div className="flex items-baseline gap-2">
              <h3 className="text-xl sm:text-2xl font-extrabold shrink-0">{r.title}</h3>
              {r.meta && (
                <>
                  <span
                    aria-hidden
                    className="flex-1 border-b-2 border-dotted border-[#0C1820]/20 -translate-y-1.5 mx-2 hidden sm:block"
                  />
                  <p className="font-archivo text-lg text-gray-400 shrink-0">{r.meta}</p>
                </>
              )}
            </div>
            <p className="text-gray-500 leading-relaxed max-w-lg mt-3">{r.body}</p>
            {r.cta &&
              (r.cta.external ? (
                <a
                  href={r.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full sm:w-auto justify-center rounded-full bg-primary px-8 py-3.5 min-h-[44px] items-center text-sm font-bold text-white hover:bg-primary-dark transition-colors"
                >
                  {r.cta.label}
                </a>
              ) : (
                <Link
                  href={r.cta.href}
                  className="mt-6 inline-flex w-full sm:w-auto justify-center rounded-full bg-primary px-8 py-3.5 min-h-[44px] items-center text-sm font-bold text-white hover:bg-primary-dark transition-colors"
                >
                  {r.cta.label}
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export type LedgerRow = {
  title: string;
  price: string;
  body: string;
  href?: string;
  link?: string;
};

/** Dotted-leader price ledger rows (cafe-menu style). */
export function Ledger({ rows, footnote }: { rows: LedgerRow[]; footnote?: string }) {
  return (
    <div>
      {rows.map((row) => (
        <div key={row.title} className="border-t border-[#0C1820]/10 py-8 first:border-t-0 first:pt-0">
          <div className="flex items-baseline gap-2">
            <h3 className="text-lg sm:text-xl font-extrabold shrink-0">{row.title}</h3>
            <span
              aria-hidden
              className="flex-1 border-b-2 border-dotted border-[#0C1820]/20 -translate-y-1.5 mx-2"
            />
            <p className="font-archivo text-xl sm:text-2xl text-[#0C1820] shrink-0">{row.price}</p>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-lg mt-2.5 mb-3">{row.body}</p>
          {row.href && row.link && (
            <Link
              href={row.href}
              className="group inline-flex items-center gap-2 text-sm font-bold text-primary-dark hover:text-[#0C1820] transition-colors"
            >
              {row.link} <Arrow />
            </Link>
          )}
        </div>
      ))}
      {footnote && <p className="border-t border-[#0C1820]/10 pt-5 text-xs text-gray-400">{footnote}</p>}
    </div>
  );
}

/** Rounded pill chips. tone="light" for use on ink backgrounds. */
export function Pills({ items, tone = "dark" }: { items: string[]; tone?: "dark" | "light" }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {items.map((item) => (
        <span
          key={item}
          className={
            tone === "light"
              ? "rounded-full border border-white/20 px-4 py-1.5 text-[13px] font-semibold text-white"
              : "rounded-full border border-[#0C1820]/15 bg-white px-5 py-2.5 text-sm font-semibold text-gray-800"
          }
        >
          {item}
        </span>
      ))}
    </div>
  );
}

/** FAQ accordion rows using details/summary (server-safe, no JS). */
export function FaqRows({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div>
      {faqs.map((faq) => (
        <details key={faq.q} className="group border-t border-gray-200">
          <summary className="list-none [&::-webkit-details-marker]:hidden flex w-full cursor-pointer items-baseline justify-between gap-6 py-6 text-left">
            <span className="text-lg font-extrabold text-gray-900">{faq.q}</span>
            <span
              aria-hidden
              className="font-archivo text-2xl text-primary transition-transform group-open:rotate-45 shrink-0"
            >
              +
            </span>
          </summary>
          <p className="text-gray-500 leading-relaxed max-w-2xl pb-7 -mt-1">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}

/** Ink closing CTA band. */
export function InkCTA({
  title,
  intro,
  primary,
  secondary,
  footnote,
}: {
  title: React.ReactNode;
  intro?: string;
  primary: { label: string; href: string; external?: boolean };
  secondary?: { label: string; href: string };
  footnote?: string;
}) {
  return (
    <section className="bg-[#0C1820] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 text-center">
        <h2 className="font-archivo text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.05] mb-5">{title}</h2>
        {intro && <p className="text-[#B9CBD4] text-lg max-w-md mx-auto mb-9">{intro}</p>}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {primary.external ? (
            <a
              href={primary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-9 py-4 text-sm font-bold text-white hover:bg-primary-dark transition-colors"
            >
              {primary.label}
            </a>
          ) : (
            <a
              href={primary.href}
              className="rounded-full bg-primary px-9 py-4 text-sm font-bold text-white hover:bg-primary-dark transition-colors"
            >
              {primary.label}
            </a>
          )}
          {secondary && (
            <a
              href={secondary.href}
              className="rounded-full border border-white/25 px-9 py-4 text-sm font-semibold text-white hover:border-white/60 transition-colors"
            >
              {secondary.label}
            </a>
          )}
        </div>
        {footnote && <p className="mt-9 text-sm text-[#8FA9B5]">{footnote}</p>}
      </div>
    </section>
  );
}
