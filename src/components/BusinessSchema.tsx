import Script from "next/script";

export function BusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness"],
    "@id": "https://buchwaldfamilydentistry.com/#dentist",
    name: "Buchwald Family Dentistry & Orthodontics",
    alternateName: "Buchwald Family Dentistry",
    url: "https://buchwaldfamilydentistry.com",
    logo: "https://buchwaldfamilydentistry.com/images/logo-color.png",
    image: "https://buchwaldfamilydentistry.com/images/office-1.jpg",
    telephone: "+19726443280",
    email: "Receptionist245@outlook.com",
    description:
      "Top-rated family dentist in Richardson, TX. Cleanings, Invisalign, implants, whitening, cosmetic and restorative dentistry. 4.9 stars, 433+ Google reviews.",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "300 N Coit Rd #245",
      addressLocality: "Richardson",
      addressRegion: "TX",
      postalCode: "75080",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.9601,
      longitude: -96.7677,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "07:00",
        closes: "15:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "433",
      bestRating: "5",
    },
    sameAs: [
      "https://www.facebook.com/MaxBuchwaldFamilyDentist/",
      "https://www.instagram.com/buchwaldfamilydentistry/",
      "https://www.youtube.com/@BuchwaldFamilyDentistry",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "New Patient Cleaning & Exam",
            description: "Professional cleaning, comprehensive exam, and digital X-rays for new patients.",
          },
          price: "129.00",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Invisalign Clear Aligners",
            description: "Custom clear aligners to straighten teeth without metal brackets. Financing available.",
          },
          price: "115.00",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "115.00",
            priceCurrency: "USD",
            unitText: "month",
            referenceQuantity: {
              "@type": "QuantitativeValue",
              value: "1",
              unitCode: "MON",
            },
          },
        },
      ],
    },
    founder: {
      "@type": "Person",
      name: "Dr. Max Buchwald Jr.",
      jobTitle: "Dentist",
      description:
        "DDS from UT Health San Antonio. Member of ADA, TDA, and Academy of General Dentistry. Specialized training in Invisalign, molar endodontics, and implantology.",
    },
    areaServed: [
      { "@type": "City", name: "Richardson" },
      { "@type": "City", name: "Plano" },
      { "@type": "City", name: "Allen" },
      { "@type": "City", name: "Garland" },
      { "@type": "City", name: "Dallas" },
      { "@type": "City", name: "Coppell" },
      { "@type": "City", name: "Carrollton" },
    ],
    paymentAccepted: "Cash, Credit Card, Insurance, Cherry Financing",
    currenciesAccepted: "USD",
    medicalSpecialty: "Dentistry",
    isAcceptingNewPatients: true,
  };

  return (
    <Script
      id="schema-business"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
