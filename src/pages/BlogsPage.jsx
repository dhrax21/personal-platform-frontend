import { useEffect, useState } from "react";
import { getPublicBlogs } from "../api/blogApi";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const PAGE_SIZE = 5;

  useEffect(() => {
    setLoading(true);
    setError(false);

    getPublicBlogs(page, PAGE_SIZE)
      .then((data) => {
        setBlogs(data.blogs);
        setTotalPages(data.totalPages);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <section className="py-32">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-gray-600 mb-16 max-w-2xl">
          Writing about real-world engineering, backend systems,
          and lessons from production.
        </p>

        {/* States */}
        {loading && <p>Loading articles…</p>}
        {error && <p className="text-red-500">Failed to load blogs.</p>}

        {/* Blog List */}
        {!loading && !error && (
          <>
            <div className="space-y-12">
              {blogs.map((blog) => (
                <article key={blog.slug} className="border-b pb-10">
                  <div className="text-xs text-gray-500 mb-2">
                    {new Date(blog.publishedAt).toDateString()}
                  </div>

                  <h2 className="text-2xl font-semibold mb-3">
                    {blog.title}
                  </h2>

                  <p className="text-gray-600 mb-4 max-w-3xl">
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

            {/* Pagination Controls */}
            <div className="flex items-center justify-between mt-16">
              <button
                disabled={page === 0}
                onClick={() => setPage((p) => p - 1)}
                className="px-4 py-2 border rounded disabled:opacity-40"
              >
                ← Previous
              </button>

              <span className="text-sm text-gray-600">
                Page {page + 1} of {totalPages}
              </span>

              <button
                disabled={page + 1 >= totalPages}
                onClick={() => setPage((p) => p + 1)}
                className="px-4 py-2 border rounded disabled:opacity-40"
              >
                Next →
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
