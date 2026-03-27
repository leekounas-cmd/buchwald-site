"use client";

import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID;

export function Analytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
          ${GADS_ID ? `gtag('config', '${GADS_ID}');` : ""}
        `}
      </Script>
    </>
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
