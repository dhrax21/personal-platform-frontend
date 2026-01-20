import { blogs } from "../data/blogs";

export default function BlogsPage() {
  return (
    <section className="py-32">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4">
          Blog
        </h1>
        <p className="text-gray-600 mb-16 max-w-2xl">
          Writing about real-world engineering, system design,
          and lessons learned from production projects.
        </p>

        {/* Blog list */}
        <div className="space-y-12">
          {blogs.map((blog) => (
            <article
              key={blog.slug}
              className="border-b pb-10"
            >
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

      </div>
    </section>
  );
}
