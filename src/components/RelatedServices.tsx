import Link from "next/link";
import { motion } from "motion/react";

const allServices: Record<string, { title: string; href: string; description: string }> = {
  cleaning: { title: "Cleaning & Exam", href: "/services/cleaning", description: "Routine cleanings, X-rays, and comprehensive exams." },
  general: { title: "General Dentistry", href: "/services/general", description: "Fillings, crowns, root canals, and everyday dental care." },
  cosmetic: { title: "Cosmetic Dentistry", href: "/services/cosmetic", description: "Veneers, bonding, and smile makeovers." },
  restorative: { title: "Restorative Dentistry", href: "/services/restorative", description: "Implants, bridges, dentures, and rebuilds." },
  invisalign: { title: "Invisalign", href: "/invisalign", description: "Clear aligners for a straighter smile." },
  whitening: { title: "Teeth Whitening", href: "/teeth-whitening", description: "Professional whitening for a brighter smile." },
  laser: { title: "Laser Therapy", href: "/laser-therapy", description: "Gentler procedures with faster recovery." },
};

export function RelatedServices({ keys }: { keys: (keyof typeof allServices)[] }) {
  const services = keys.map((k) => allServices[k]).filter(Boolean);

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-4xl px-4">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Related Services</h2>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((s, i) => (
            <motion.div key={s.href} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
              <Link href={s.href} className="block bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors group">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{s.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
