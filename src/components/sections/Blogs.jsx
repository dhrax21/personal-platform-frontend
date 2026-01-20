import { useEffect, useState } from "react";
import { getPublicBlogs } from "../../api/blogApi";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getPublicBlogs()
      .then(setBlogs)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="blogs" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-16">
          Blogs
        </h2>

        {loading && (
          <p className="text-center text-sm text-gray-500">
            Loading blogs…
          </p>
        )}

        {error && (
          <p className="text-center text-sm text-red-500">
            Failed to load blogs.
          </p>
        )}

        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article
                key={blog.slug}
                className="border rounded-2xl p-6 hover:shadow-soft transition"
              >
                <div className="text-xs text-gray-500 mb-3">
                  {new Date(blog.publishedAt).toDateString()}
                </div>

                <h3 className="font-semibold text-lg mb-3">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-600 mb-6">
                  {blog.summary}
                </p>

                <a
                  href={`/blog/${blog.slug}`}
                  className="text-sm underline hover:text-accent"
                >
                  Read article →
                </a>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
