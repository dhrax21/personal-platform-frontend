import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogBySlug } from "../api/blogApi";

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log("getBlogBySlug exists:", getBlogBySlug);

  useEffect(() => {
    getBlogBySlug(slug)
      .then(setBlog)
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return <p className="py-32 text-center">Loading…</p>;
  }

  if (!blog) {
    return <p className="py-32 text-center">Blog not found.</p>;
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-32">
      <h1 className="text-4xl font-bold mb-4">
        {blog.title}
      </h1>
      


      <p className="text-sm text-gray-500 mb-10">
        {new Date(blog.publishedAt).toDateString()}
      </p>

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </article>
    
  );
}
