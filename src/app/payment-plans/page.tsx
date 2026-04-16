import Script from "next/script";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Payment Plans & Financing | Buchwald Family Dentistry",
  description:
    "Flexible dental financing through Cherry. 0% APR options available. Break any treatment into manageable monthly payments. Buchwald Family Dentistry in Richardson, TX.",
  alternates: {
    canonical: "https://www.buchwaldfamilydentistry.com/payment-plans",
  },
};

export default function PaymentPlansPage() {
  return (
    <>
      {/* Cherry widget */}
      <Script
        id="cherry-widget"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function (w, d, s, o, f, js, fjs) {
              w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments); };
              (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
              js.id = o; js.src = f; js.async = 1;
              fjs.parentNode.insertBefore(js, fjs);
            })(window, document, "script", "_hw", "https://files.withcherry.com/widgets/widget.js");
            _hw("init", {
              debug: false,
              variables: {
                slug: 'buchwald-family-dentistry--orthodontics',
                name: 'Buchwald Family Dentistry & Orthodontics',
                images: [58],
                customLogo: '',
                defaultPurchaseAmount: 2000,
                customImage: '',
                imageCategory: 'dental',
                language: 'en',
              },
              styles: {
                primaryColor: '#85b9df',
                secondaryColor: '#85b9df10',
                fontFamily: 'Montserrat',
                headerFontFamily: 'Montserrat',
              }
            }, ['hero', 'calculator', 'howitworks', 'faq']);
          `,
        }}
      />

      {/* Cherry widget mount points */}
      <div id="all" />
      <div id="hero" />
      <div id="calculator" />
      <div id="howitworks" />
      <div id="testimony" />
      <div id="faq" />

      <BreadcrumbSchema items={[{ name: "Payment Plans", href: "/payment-plans" }]} />
    </>
  );
}
