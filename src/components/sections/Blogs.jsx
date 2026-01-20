import { blogs } from "../../data/blogs";

export default function Blogs() {
  return (
    <section id="blogs" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex justify-center mb-6">
          <span className="border px-4 py-1 rounded-full text-xs">
            BLOGS
          </span>
        </div>

        <h2 className="text-3xl font-bold text-center mb-16">
          Writing about real-world engineering
        </h2>

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

      </div>
    </section>
  );
}
