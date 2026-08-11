"use client";

import { useState, useCallback, useEffect } from "react";
import { trackConversion } from "@/components/Analytics";
import { FORMSPREE_QUICK_BOOK } from "@/lib/formspree";

const PHONE = "(972) 644-3280";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export function QuickBookCTA({
  className = "",
  children = "Quick Book",
}: Props) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  const close = useCallback(() => {
    setOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setError("");
    }, 300);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("_subject", "Quick Book Lead, Homepage");
    data.append("source", "homepage-quick-book");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_QUICK_BOOK}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      setLoading(false);

      if (res.ok) {
        trackConversion(process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL);
        if (typeof window !== "undefined" && typeof window.gtag === "function") {
          window.gtag("event", "form_submit", {
            form_name: "quick_book_homepage",
            page_path: window.location.pathname,
          });
        }
        const fbqWindow = window as unknown as { fbq?: (...args: unknown[]) => void };
        if (typeof fbqWindow.fbq === "function") {
          fbqWindow.fbq("track", "Lead", {
            content_name: "Quick Book Homepage",
          });
        }
        const fn = data.get("first_name");
        if (fn) setFirstName(String(fn));
        setSubmitted(true);
      } else {
        setError(`Something went wrong. Please call us at ${PHONE}.`);
      }
    } catch {
      setLoading(false);
      setError(`Something went wrong. Please call us at ${PHONE}.`);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
      >
        {children}
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 z-[9998] animate-[fadeIn_0.2s_ease-out]"
            onClick={close}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
            <div
              className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full pointer-events-auto animate-[slideUp_0.3s_ease-out] overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-labelledby="quick-book-title"
            >
              {/* Close */}
              <button
                onClick={close}
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition-all z-10"
                aria-label="Close"
                type="button"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path
                    d="M1 1L13 13M13 1L1 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {/* Accent bar */}
              <div className="h-1 bg-gradient-to-r from-sky-500 to-teal-500" />

              <div className="p-6 md:p-8">
                {!submitted ? (
                  <>
                    <h2
                      id="quick-book-title"
                      className="text-2xl font-semibold text-gray-900 mb-1"
                    >
                      Have us call you.
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      Drop your number. We call you back the same day.
                      No phone tag, no full form.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div>
                        <label
                          htmlFor="qb-first-name"
                          className="text-xs font-bold uppercase tracking-wider text-gray-500"
                        >
                          First name
                        </label>
                        <input
                          id="qb-first-name"
                          name="first_name"
                          type="text"
                          required
                          autoComplete="given-name"
                          className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="qb-phone"
                          className="text-xs font-bold uppercase tracking-wider text-gray-500"
                        >
                          Phone
                        </label>
                        <input
                          id="qb-phone"
                          name="phone"
                          type="tel"
                          required
                          autoComplete="tel"
                          placeholder="(972) 555-0000"
                          className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="qb-best-time"
                          className="text-xs font-bold uppercase tracking-wider text-gray-500"
                        >
                          Best time to call (optional)
                        </label>
                        <select
                          id="qb-best-time"
                          name="best_time"
                          defaultValue=""
                          className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm bg-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        >
                          <option value="">Anytime</option>
                          <option value="morning">Morning, 7am to 11am</option>
                          <option value="midday">Midday, 11am to 1pm</option>
                          <option value="afternoon">Afternoon, 1pm to 3pm</option>
                        </select>
                      </div>

                      {error && (
                        <p className="text-sm text-red-600" role="alert">
                          {error}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 px-6 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-60"
                      >
                        {loading ? "Sending..." : "Have us call you"}
                      </button>
                    </form>

                    <p className="text-[11px] text-gray-400 text-center mt-4 leading-relaxed">
                      By submitting, you agree we may text or call you to
                      schedule. We never share your info.
                    </p>
                  </>
                ) : (
                  <div className="text-center py-4">
                    <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-teal-600"
                        aria-hidden
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                      Got it{firstName ? `, ${firstName}` : ""}.
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      We will call you back, usually within 2 hours
                      during office hours (Mon–Thu, 7am to 3pm).
                    </p>
                    <button
                      type="button"
                      onClick={close}
                      className="w-full py-3 px-6 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
