import { Stars } from "@/components/v8";

const REVIEWS_URL = "https://share.google/9gal12WjpTrHj1b4V";

const reviews = [
  {
    quote:
      "Dr. Buchwald and his team are amazing! They made me feel so comfortable during my visit. The office is modern and clean, and the staff is incredibly friendly.",
    name: "Sarah M.",
    city: "Richardson",
  },
  {
    quote:
      "Best dental experience I've ever had. They explained everything clearly and were so gentle. My kids actually look forward to their cleanings now!",
    name: "James T.",
    city: "Plano",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-dark mb-4">In their words</p>
          <h2 className="font-archivo text-4xl sm:text-5xl leading-[1.05]">4.9 stars. 441 reviews. Zero coaching.</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-x-14 gap-y-10">
          {reviews.map((r, i) => (
            <figure key={r.name} className={i === 0 ? "border-t-2 border-[#0C1820] pt-8" : "border-t border-gray-200 pt-8"}>
              <Stars className="h-4 w-4" />
              <blockquote className="text-lg sm:text-xl leading-relaxed text-gray-800 mt-5 mb-5">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="text-sm text-gray-500">
                <span className="font-bold text-gray-900">{r.name}</span> · {r.city} · Google review
              </figcaption>
            </figure>
          ))}
        </div>
        <a
          href={REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex items-center gap-2 text-sm font-bold text-primary-dark hover:text-[#0C1820] transition-colors"
        >
          Read all 441 reviews on Google
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
