import { useEffect, useState } from "react";
import {
  createBlog,
  updateBlog,
  getBlogById,
} from "../../api/adminBlogApi";
import { useNavigate, useParams } from "react-router-dom";

export default function AdminBlogForm() {
  const [form, setForm] = useState({
    title: "",
    summary: "",
    content: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const nav = useNavigate();
  const { id } = useParams();

  // 🔑 Load existing blog for edit
  useEffect(() => {
    if (!id) return;

    setLoading(true);
    getBlogById(id)
      .then((data) => {
        setForm({
          title: data.title,
          summary: data.summary,
          content: data.content,
        });
      })
      .catch(() => setError("Failed to load blog"))
      .finally(() => setLoading(false));
  }, [id]);

  const submit = async () => {
    try {
      setLoading(true);
      setError("");

      if (id) {
        await updateBlog(id, form);
      } else {
        await createBlog(form);
      }

      nav("/admin/blogs");
    } catch {
      setError("Failed to save blog");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-24 text-center">
        Loading…
      </section>
    );
  }

  return (
    <section className="py-24 max-w-3xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-8">
        {id ? "Edit Blog" : "Create Blog"}
      </h1>

      {error && (
        <p className="text-red-500 mb-4">{error}</p>
      )}

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
        disabled={loading}
        className="px-6 py-3 bg-black text-white disabled:opacity-60"
      >
        {loading ? "Saving…" : "Save"}
      </button>
    </section>
  );
}
