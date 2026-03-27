import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { areasData } from "@/lib/areas-data";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { FAQSchema } from "@/components/FAQSchema";
import { CTABanner } from "@/components/CTABanner";
import { AreaHero } from "./AreaHero";
import { AreaFAQ } from "./AreaFAQ";

export function generateStaticParams() {
  return areasData.map((area) => ({ city: area.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const area = areasData.find((a) => a.slug === city);
  if (!area) return {};

  const title = `Dentist Near ${area.name}, TX | Buchwald Family Dentistry`;
  const description = `Buchwald Family Dentistry proudly serves ${area.name}, TX — just ${area.distance} from our Richardson office. Modern care, comfortable visits. Call (972) 644-3280.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://buchwaldfamilydentistry.com/areas/${area.slug}`,
      siteName: "Buchwald Family Dentistry",
      type: "website",
    },
  };
}

const services = [
  { title: "Cleaning & Exam", href: "/services/cleaning" },
  { title: "General Dentistry", href: "/services/general" },
  { title: "Cosmetic Dentistry", href: "/services/cosmetic" },
  { title: "Restorative", href: "/services/restorative" },
  { title: "Invisalign", href: "/invisalign" },
  { title: "Teeth Whitening", href: "/teeth-whitening" },
];

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const area = areasData.find((a) => a.slug === city);
  if (!area) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Areas We Serve", href: "/areas" },
          { name: `${area.name}, TX`, href: `/areas/${area.slug}` },
        ]}
      />
      <FAQSchema faqs={area.faqs} />

      {/* LocalBusiness JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "Buchwald Family Dentistry & Orthodontics",
            telephone: "+1-972-644-3280",
            url: "https://buchwaldfamilydentistry.com",
            image: "https://buchwaldfamilydentistry.com/images/logo.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: "300 N Coit Rd #245",
              addressLocality: "Richardson",
              addressRegion: "TX",
              postalCode: "75080",
              addressCountry: "US",
            },
            areaServed: {
              "@type": "City",
              name: area.name,
              addressRegion: "TX",
              addressCountry: "US",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                opens: "07:00",
                closes: "15:00",
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <AreaHero name={area.name} description={area.description} />

      {/* Stats Row */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-primary/5 rounded-xl p-5 text-center">
              <p className="text-3xl sm:text-4xl font-extrabold text-primary">
                {area.distance === "0 minutes" ? "Home" : area.distance}
              </p>
              <p className="text-gray-500 text-xs font-medium mt-1">
                {area.distance === "0 minutes" ? "Base" : "Drive time"}
              </p>
            </div>
            <div className="bg-primary/5 rounded-xl p-5 text-center">
              <p className="text-3xl sm:text-4xl font-extrabold text-primary">{area.population}</p>
              <p className="text-gray-500 text-xs font-medium mt-1">Population</p>
            </div>
            <div className="bg-primary/5 rounded-xl p-5 text-center">
              <p className="text-3xl sm:text-4xl font-extrabold text-primary">
                {area.neighborhoods.length}
              </p>
              <p className="text-gray-500 text-xs font-medium mt-1">Neighborhoods</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Patients Choose Us */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">
            Why Patients from {area.name} Choose Us
          </h2>
          <div className="space-y-3">
            {area.highlights.map((highlight) => (
              <div
                key={highlight}
                className="bg-white rounded-xl p-5 flex items-start gap-3"
              >
                <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="h-3 w-3 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
            Services Available for {area.name} Patients
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Everything your family needs — from routine cleanings to full smile transformations.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.href} href={s.href}>
                <div className="group bg-gray-50 rounded-xl p-5 transition-all hover:bg-primary/5 hover:shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <h3 className="font-bold text-gray-900 text-sm">{s.title}</h3>
                  </div>
                  <span className="text-primary text-xs font-bold mt-2 inline-block group-hover:underline">
                    Learn more &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
            {area.name} Neighborhoods We Serve
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Patients come to us from all across {area.name}, including:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {area.neighborhoods.map((n) => (
              <div
                key={n}
                className="bg-white rounded-xl p-4 text-center"
              >
                <p className="font-semibold text-gray-900 text-sm">{n}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">
            Frequently Asked Questions — {area.name}
          </h2>
          <AreaFAQ faqs={area.faqs} />
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
