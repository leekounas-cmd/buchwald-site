import { Stars } from "@/components/v8";

// Historically a rotating carousel; now a static v8 review wall.
// Keeps the same export name and `limit` prop so consumers don't change.

interface Review {
  name: string;
  location: string;
  text: string;
  rating: number;
  timeAgo: string;
}

const reviews: Review[] = [
  {
    name: "Sarah M.",
    location: "Richardson",
    text: "Dr. Buchwald and his team are amazing! They made me feel so comfortable during my visit. The office is modern and clean, and the staff is incredibly friendly.",
    rating: 5,
    timeAgo: "2 months ago",
  },
  {
    name: "David R.",
    location: "Richardson",
    text: "Been a patient for years and I've never had a bad experience. Doctor is the best! The Invisalign treatment was perfect!",
    rating: 5,
    timeAgo: "3 months ago",
  },
  {
    name: "Jennifer K.",
    location: "Allen",
    text: "I've been coming to Buchwald Family Dentistry for 20+ years. Dr. Buchwald and his staff are fantastic. If you're looking for a dentist this is the place to go.",
    rating: 5,
    timeAgo: "2 weeks ago",
  },
  {
    name: "Amanda L.",
    location: "Garland",
    text: "My daughter loves going to the dentist because this office makes it such a fun experience. I appreciate the honesty and professionalism from all the staff.",
    rating: 5,
    timeAgo: "1 month ago",
  },
  {
    name: "Carlos G.",
    location: "Richardson",
    text: "Went in for an emergency toothache and they got me in the same day. The whole team was so kind and professional. Pain was gone immediately. Can't recommend them enough.",
    rating: 5,
    timeAgo: "3 weeks ago",
  },
  {
    name: "Mark P.",
    location: "Richardson",
    text: "Dr. Buchwald took the time to explain every option for my treatment. No pressure, no upselling. Just honest recommendations. That's rare and I appreciate it.",
    rating: 5,
    timeAgo: "2 months ago",
  },
];

export function ReviewsCarousel({ limit }: { limit?: number } = {}) {
  const shownReviews = limit ? reviews.slice(0, limit) : reviews;

  return (
    <section className="w-full bg-[#F2F7F8]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-dark mb-4">In their words</p>
          <h2 className="font-archivo text-3xl sm:text-4xl leading-[1.05]">4.9 stars. 441 reviews. Zero coaching.</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-x-14 gap-y-10">
          {shownReviews.map((r) => (
            <figure key={r.name} className="border-t border-[#0C1820]/15 pt-7">
              <Stars />
              <blockquote className="text-base leading-relaxed text-gray-700 mt-4 mb-4">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="text-sm text-gray-500">
                <span className="font-bold text-gray-900">{r.name}</span> · {r.location} · {r.timeAgo}
              </figcaption>
            </figure>
          ))}
        </div>
        <a
          href="https://share.google/9gal12WjpTrHj1b4V"
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
