import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../../api/adminAuthApi";

export default function AdminLogin() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submit = async () => {
    setError("");
    setLoading(true);

    try {
      // Backend sets HTTP-only cookie (auth_token)
      await adminLogin(form);

      // Navigate to protected admin route
      navigate("/admin/blogs");
    } catch {
      setError("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-32 max-w-md mx-auto px-6">
      <h1 className="text-3xl font-bold mb-6">Admin Login</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <input
        className="w-full border p-3 mb-4"
        placeholder="Username"
        value={form.username}
        onChange={(e) =>
          setForm({ ...form, username: e.target.value })
        }
      />

      <input
        type="password"
        className="w-full border p-3 mb-6"
        placeholder="Password"
        value={form.password}
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <button
        onClick={submit}
        disabled={loading}
        className="w-full py-3 bg-black text-white disabled:opacity-60"
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </section>
  );
}
