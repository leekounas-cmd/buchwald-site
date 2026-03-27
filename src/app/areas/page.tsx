"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABanner } from "@/components/CTABanner";
import { areasData } from "@/lib/areas-data";

export default function AreasPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Areas We Serve", href: "/areas" }]} />

      {/* Hero */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">
                Areas We Serve
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-5">
                Serving Families Across DFW
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed">
                Buchwald Family Dentistry is based in Richardson, TX — and proudly serves patients
                from across the Dallas-Fort Worth metroplex. Modern care, comfortable visits, and a
                team that treats you like family.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* City Grid */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areasData.map((area, i) => (
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/areas/${area.slug}`}>
                  <div className="group bg-white rounded-xl p-6 h-full transition-all hover:shadow-md">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <h2 className="font-bold text-gray-900 text-lg">{area.name}, TX</h2>
                    </div>
                    <p className="text-primary text-xs font-semibold mb-3">
                      {area.slug === "richardson" ? "Home base" : `${area.distance} drive`}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                      {area.description}
                    </p>
                    <span className="text-primary text-xs font-bold group-hover:underline">
                      Learn more &rarr;
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
