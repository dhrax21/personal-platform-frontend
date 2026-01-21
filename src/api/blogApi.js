const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:9090";

export async function getPublicBlogs(page = 0, size = 5) {
  const res = await fetch(
    `${API_BASE_URL}/api/public/blogs?page=${page}&size=${size}`
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch blogs: ${res.status}`);
  }

  const data = await res.json();

  return {
    blogs: data.content,
    page: data.number,
    totalPages: data.totalPages,
    totalElements: data.totalElements,
    isLast: data.last,
    isFirst: data.first,
  };
}

/* ✅ GET SINGLE BLOG (THIS WAS MISSING) */
export async function getBlogBySlug(slug) {
  const res = await fetch(
    `${API_BASE_URL}/api/public/blogs/${slug}`
  );

  if (!res.ok) {
    throw new Error("Blog not found");
  }

  return res.json();
}
