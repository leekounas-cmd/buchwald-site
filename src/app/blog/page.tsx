"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { StatRow, Highlight } from "@/components/ContentBlocks";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-8">
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Dental Blog</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1]">Quick Reads for a Healthier Smile</h1>
          </motion.div>

          <StatRow stats={[
            { value: `${blogPosts.length}`, label: "Articles" },
            { value: "1–2 min", label: "Read Time" },
            { value: "100%", label: "No Jargon" },
          ]} />

          <Highlight>Straight talk about your dental health — no scare tactics. Just useful info from our team in Richardson, TX.</Highlight>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-14 sm:py-18 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-xl p-6 h-full hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span className="h-1 w-1 rounded-full bg-gray-300" />
                    <span className="text-primary font-semibold">{post.readTime}</span>
                  </div>
                  <h2 className="font-bold text-gray-900 text-lg mb-2 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-block mt-4 text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform">
                    Read more &rarr;
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BreadcrumbSchema items={[{ name: "Blog", href: "/blog" }]} />
    </>
  );
}
