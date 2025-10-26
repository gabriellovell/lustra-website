import blogIndex from "@/content/blog/index.json";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Post = {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  coverImage?: string;
  content: string;
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const posts = blogIndex.posts as Post[];
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} - Lustra AI`,
    description: post.description || "",
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const posts = blogIndex.posts as Post[];
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <article>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        {post.date && <p className="text-gray-500 mb-6">{new Date(post.date).toLocaleDateString()}</p>}
        {post.coverImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.coverImage} alt={post.title} className="w-full rounded-lg mb-6 object-cover" />
        )}
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  );
}
