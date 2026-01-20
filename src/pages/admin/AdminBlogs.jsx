import { useEffect, useState } from "react";
import {
  getAllBlogs,
  deleteBlog,
  publishBlog,
} from "../../api/adminBlogApi";
import { Link } from "react-router-dom";

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);

  const load = () => {
    getAllBlogs().then(setBlogs);
  };

  useEffect(load, []);

  return (
    <section className="py-24 max-w-5xl mx-auto px-6">
      <div className="flex justify-between mb-10">
        <h1 className="text-3xl font-bold">Admin Blogs</h1>
        <Link
          to="/admin/blogs/create"
          className="px-4 py-2 bg-black text-white"
        >
          New Blog
        </Link>
      </div>

      <div className="space-y-4">
        {blogs.map((b) => (
          <div
            key={b.id}
            className="border p-4 flex justify-between"
          >
            <div>
              <h2 className="font-semibold">{b.title}</h2>
              <p className="text-sm text-gray-500">
                {b.status}
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                to={`/admin/blogs/edit/${b.id}`}
                className="underline"
              >
                Edit
              </Link>

              {b.status !== "PUBLISHED" && (
                <button
                  onClick={() => publishBlog(b.id).then(load)}
                  className="underline"
                >
                  Publish
                </button>
              )}

              <button
                onClick={() => deleteBlog(b.id).then(load)}
                className="text-red-500 underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
