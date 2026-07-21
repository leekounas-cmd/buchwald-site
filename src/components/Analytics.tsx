"use client";

import Script from "next/script";
import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID;

export function Analytics() {
  // Init runs in an effect instead of an inline <Script> block: Next 16 + React 19
  // does not reliably execute inline Script children, which left window.gtag
  // undefined and no config/page_view ever sent.
  useEffect(() => {
    if (!GA_ID || typeof window.gtag === "function") return;
    const w = window as unknown as { dataLayer: unknown[] };
    w.dataLayer = w.dataLayer || [];
    window.gtag = function gtag() {
      // GA expects the raw arguments object pushed, not a spread array
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
    if (GADS_ID) window.gtag("config", GADS_ID);
  }, []);

  if (!GA_ID) return null;

  return (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      strategy="afterInteractive"
    />
  );
}

export function trackConversion(conversionLabel?: string) {
  if (typeof window !== "undefined" && GADS_ID && conversionLabel) {
    (window as any).gtag?.("event", "conversion", {
      send_to: `${GADS_ID}/${conversionLabel}`,
    });
  }
  if (typeof window !== "undefined" && GA_ID) {
    (window as any).gtag?.("event", "generate_lead", {
      event_category: "engagement",
      event_label: "booking_form_submit",
    });
  }
}
