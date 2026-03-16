import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found | Buchwald Family Dentistry",
    };
  }

  return {
    title: `${post.title} | Buchwald Family Dentistry | Richardson, TX`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Buchwald Family Dentistry`,
      description: post.excerpt,
    },
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
