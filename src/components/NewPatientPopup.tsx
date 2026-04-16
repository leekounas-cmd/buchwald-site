"use client";

import { useState, useEffect, useCallback } from "react";

export function NewPatientPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const showPopup = useCallback(() => {
    if (sessionStorage.getItem("buchwald-popup-dismissed")) return;
    setIsVisible(true);
  }, []);

  const dismiss = useCallback(() => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem("buchwald-popup-dismissed", "true");
  }, []);

  useEffect(() => {
    if (isDismissed) return;
    if (window.location.pathname === "/book") return;
    if (sessionStorage.getItem("buchwald-popup-dismissed")) return;

    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 60) {
        showPopup();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    const timer = setTimeout(showPopup, 30000);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [isDismissed, showPopup]);

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-[9998] animate-[fadeIn_0.2s_ease-out]"
        onClick={dismiss}
      />

      {/* Popup */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
        <div
          className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full pointer-events-auto animate-[slideUp_0.3s_ease-out] overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
        >
          {/* Close */}
          <button
            onClick={dismiss}
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition-all z-10"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Accent bar */}
          <div className="h-1 bg-gradient-to-r from-sky-500 to-teal-500" />

          <div className="p-6 md:p-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-medium mb-4">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-teal-500" />
              </span>
              Same-day appointments available
            </div>

            <h2 id="popup-title" className="text-2xl font-semibold text-gray-900 mb-2">
              New patient? Start here.
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Comprehensive exam, digital X-rays, and a full consultation for just $99. No insurance required.
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-semibold text-gray-900">$99</span>
              <span className="text-sm text-gray-400 line-through">$300+ value</span>
            </div>

            {/* Included */}
            <div className="space-y-2 mb-8">
              {["Comprehensive exam", "Full set of digital X-rays", "Treatment consultation", "Personalized care plan"].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-teal-500 flex-shrink-0">
                    <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <a
                href="https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 bg-gray-900 text-white text-sm font-medium rounded-lg text-center hover:bg-gray-800 transition-colors"
              >
                Book My $99 Visit
              </a>
              <a
                href="tel:9726443280"
                className="w-full py-3 px-6 border border-gray-200 text-gray-600 text-sm font-medium rounded-lg text-center hover:bg-gray-50 transition-colors"
              >
                Call (972) 644-3280
              </a>
            </div>

            <p className="text-xs text-gray-400 text-center mt-4">
              Mon-Thu 7am-3pm &middot; Richardson, TX
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
