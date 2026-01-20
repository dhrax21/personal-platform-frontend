import { useEffect, useState } from "react";
import {
  createBlog,
  updateBlog,
} from "../../api/adminBlogApi";
import { useNavigate, useParams } from "react-router-dom";

export default function AdminBlogForm({ initial }) {
  const [form, setForm] = useState(
    initial ?? { title: "", summary: "", content: "" }
  );

  const nav = useNavigate();
  const { id } = useParams();

  const submit = async () => {
    if (id) {
      await updateBlog(id, form);
    } else {
      await createBlog(form);
    }
    nav("/admin/blogs");
  };

  return (
    <section className="py-24 max-w-3xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-8">
        {id ? "Edit Blog" : "Create Blog"}
      </h1>

      <input
        className="w-full border p-3 mb-4"
        placeholder="Title"
        value={form.title}
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
      />

      <input
        className="w-full border p-3 mb-4"
        placeholder="Summary"
        value={form.summary}
        onChange={(e) =>
          setForm({ ...form, summary: e.target.value })
        }
      />

      <textarea
        className="w-full border p-3 h-64 mb-6"
        placeholder="Content (HTML or Markdown)"
        value={form.content}
        onChange={(e) =>
          setForm({ ...form, content: e.target.value })
        }
      />

      <button
        onClick={submit}
        className="px-6 py-3 bg-black text-white"
      >
        Save
      </button>
    </section>
  );
}
