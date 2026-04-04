"use client";

import { useState, useEffect, useCallback } from "react";

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
    name: "Melissa T.",
    location: "Plano",
    text: "Exceptional team. Everyone was warm and welcoming, very friendly. Melissa was phenomenal, extremely communicative and answered all my questions before I even had a chance to ask them! Highly recommend.",
    rating: 5,
    timeAgo: "1 month ago",
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
    name: "Rachel W.",
    location: "Plano",
    text: "The office is beautiful and spotless. I actually look forward to my cleanings now. Melisa is the best hygienist I've ever had. So thorough and gentle.",
    rating: 5,
    timeAgo: "1 month ago",
  },
  {
    name: "Mark P.",
    location: "Richardson",
    text: "Dr. Buchwald took the time to explain every option for my treatment. No pressure, no upselling. Just honest recommendations. That's rare and I appreciate it.",
    rating: 5,
    timeAgo: "2 months ago",
  },
];

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 20 20"
      fill={filled ? "#FBBC04" : "#E0E0E0"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 1.12L12.45 6.54L18.18 7.29L13.91 11.27L15.18 17.12L10 14.27L4.82 17.12L6.09 11.27L1.82 7.29L7.55 6.54L10 1.12Z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

export function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  const review = reviews[current];

  return (
    <>
      <section className="w-full py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <a
            href="https://share.google/9gal12WjpTrHj1b4V"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors mb-10"
          >
            <GoogleIcon />
            <span>4.9 on Google &middot; 433 reviews</span>
          </a>

          <div
            className="relative min-h-[200px] flex flex-col items-center justify-center"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} filled={i < review.rating} />
              ))}
            </div>

            <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 max-w-2xl transition-opacity duration-300">
              &ldquo;{review.text}&rdquo;
            </blockquote>

            <div className="text-sm text-gray-500">
              <span className="font-medium text-gray-700">{review.name}</span>
              <span className="mx-2">&middot;</span>
              <span>{review.location}</span>
              <span className="mx-2">&middot;</span>
              <span>{review.timeAgo}</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => { prev(); setIsAutoPlaying(false); }}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-400 transition-all"
              aria-label="Previous review"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex gap-1.5">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setIsAutoPlaying(false); }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-4" : "bg-gray-300 w-1.5 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => { next(); setIsAutoPlaying(false); }}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-400 transition-all"
              aria-label="Next review"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Review Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "Buchwald Family Dentistry & Orthodontics",
            review: reviews.map((r) => ({
              "@type": "Review",
              reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
              author: { "@type": "Person", name: r.name },
              reviewBody: r.text,
            })),
          }),
        }}
      />
    </>
  );
}
