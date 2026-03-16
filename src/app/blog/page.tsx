"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">
              Our Blog
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-8">
              Dental Health Tips &amp; Guides
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-gray-500 text-lg leading-relaxed">
              Straight talk about your dental health — no jargon, no scare
              tactics. Just useful info from our team in Richardson, TX.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                  className="block bg-white rounded-xl p-6 h-full hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span>&middot;</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-bold text-gray-900 text-lg mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="inline-block mt-4 text-primary text-sm font-semibold">
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
