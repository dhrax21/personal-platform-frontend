const API_BASE_URL = __API_BASE_URL__;

const headers = {
  "Content-Type": "application/json",
};

export async function getAllBlogs() {
  const res = await fetch(`${API_BASE_URL}/api/admin/blogs`, {
    headers,
    credentials: "include", // 🔑 REQUIRED
  });
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
}

export async function createBlog(payload) {
  const res = await fetch(`${API_BASE_URL}/api/admin/blogs`, {
    method: "POST",
    headers,
    credentials: "include", // 🔑 REQUIRED
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to create blog");
  return res.json();
}

export async function updateBlog(id, payload) {
  const res = await fetch(`${API_BASE_URL}/api/admin/blogs/${id}`, {
    method: "PUT",
    headers,
    credentials: "include", // 🔑 REQUIRED
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to update blog");
  return res.json();
}

export async function publishBlog(id) {
  const res = await fetch(
    `${API_BASE_URL}/api/admin/blogs/${id}/publish`,
    {
      method: "PATCH",
      headers,
      credentials: "include", // 🔑 REQUIRED
    }
  );
  if (!res.ok) throw new Error("Failed to publish blog");
}

export async function deleteBlog(id) {
  const res = await fetch(`${API_BASE_URL}/api/admin/blogs/${id}`, {
    method: "DELETE",
    headers,
    credentials: "include", // 🔑 REQUIRED
  });
  if (!res.ok) throw new Error("Failed to delete blog");
}
