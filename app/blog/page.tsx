import Link from "next/link";
import blogIndex from "@/content/blog/index.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Lustra AI",
  description: "Insights, tips, and guides to help you improve your dating profile and get more matches.",
};

export default function BlogPage() {
  const posts = blogIndex.posts as {
    slug: string;
    title: string;
    description: string;
    date: string;
    coverImage?: string;
  }[];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold mb-6">Articles & Guides</h1>
      <p className="text-lg text-gray-600 mb-8">Helpful posts to improve your profile and SEO for Lustra AI.</p>

      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-500 text-sm mb-4">{new Date(post.date).toLocaleDateString()}</p>
            <p className="text-gray-700 mb-4">{post.description}</p>
            <Link href={`/blog/${post.slug}`} className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-md">
              Read article
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
