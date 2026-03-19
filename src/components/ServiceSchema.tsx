export function ServiceSchema({ name, description, url }: { name: string; description: string; url: string }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name,
          description,
          url: `https://buchwaldfamilydentistry.com${url}`,
          provider: {
            "@type": "Dentist",
            name: "Buchwald Family Dentistry & Orthodontics",
            telephone: "+1-972-644-3280",
            address: {
              "@type": "PostalAddress",
              streetAddress: "300 N Coit Rd #245",
              addressLocality: "Richardson",
              addressRegion: "TX",
              postalCode: "75080",
              addressCountry: "US",
            },
          },
          areaServed: [
            { "@type": "City", name: "Richardson" },
            { "@type": "City", name: "Plano" },
            { "@type": "City", name: "Allen" },
            { "@type": "City", name: "Garland" },
            { "@type": "City", name: "Coppell" },
            { "@type": "City", name: "Carrollton" },
          ],
        }),
      }}
    />
  );
}
