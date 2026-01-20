const API_BASE_URL = __API_BASE_URL__;

export async function adminLogin(credentials) {
  const res = await fetch(`${API_BASE_URL}/api/admin/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(credentials),
  });

  if (!res.ok) {
    throw new Error("Invalid credentials");
  }
}

export async function getAdminMe() {
  const res = await fetch(`${API_BASE_URL}/api/admin/me`, {
    credentials: "include", // 🔑 REQUIRED
  });

  if (!res.ok) return null;
  return res.json();
}

export async function adminLogout() {
  await fetch(`${API_BASE_URL}/api/admin/auth/logout`, {
    method: "POST",
    credentials: "include",
  });
}
