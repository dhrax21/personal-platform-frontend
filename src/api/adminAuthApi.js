const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:9090";

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
  try {
    const res = await fetch(`${API_BASE_URL}/api/admin/me`, {
      credentials: "include",
    });

    if (res.status === 401 || res.status === 403) {
      return null; 
    }

    if (!res.ok) {
      throw new Error("Unexpected auth error");
    }

    return res.json();
  } catch {
    return null;
  }
}


export async function adminLogout() {
  await fetch(`${API_BASE_URL}/api/admin/auth/logout`, {
    method: "POST",
    credentials: "include",
  });
}
