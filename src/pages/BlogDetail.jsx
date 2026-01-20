import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="py-32 text-center">
        <p>Blog not found.</p>
      </div>
    );
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
